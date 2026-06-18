# ADR 0003: Run the Code Mode isolate on a dedicated thread, bridged by channels

**Status:** Accepted

## Context

The QuickJS `AsyncRuntime` is `!Send`. The MCP clients (built on `rmcp`) and
their child-process transports must be polled — *and dropped* — on the
multi-threaded Tokio runtime that created them; `rmcp`'s child-process `Drop`
calls `tokio::spawn`, which panics ("no reactor running") if it runs outside a
runtime context.

An early design ran everything single-threaded using `rmcp`'s `local` feature
(relaxing `Send`) with the isolate inline. It worked for synchronous bridges but
**deadlocked / panicked** once the bridge performed real async MCP I/O: the
QuickJS executor would drive host futures (and later drop MCP clients) in a
context detached from the Tokio reactor.

## Decision

Run the gateway on a normal **multi-threaded** Tokio runtime (`rmcp` without the
`local` feature, so MCP types are `Send`/`Sync`). Execute each Code Mode script
on a **dedicated thread** with its own current-thread runtime (via
`spawn_blocking`), and bridge every `skarn.callTool` back to the main runtime
over an `mpsc` + `oneshot` channel pair:

```
main runtime                          dedicated isolate thread
────────────                          ────────────────────────
servicer task  ◀── mpsc(request) ───  ChannelBridge (ToolBridge)
  manager.call(...)  (rmcp, Send)       │  awaits oneshot
  reply ── oneshot ──────────────────▶  │
                                        QuickJS isolate (!Send)
```

The MCP clients live their whole life on the main runtime (stable reactor; clean
`Drop`); the `!Send` isolate never crosses a thread boundary; channels are `Send`
and runtime-agnostic.

## Consequences

- Robust: no cross-runtime polling, no reactor-less drops, no `local`-feature
  fragility.
- Defense in depth still holds: the isolate is hermetic (no fs/net bindings), and
  its only egress is the channel bridge.
- A future hardening is to run the isolate thread inside an OS-native sandbox
