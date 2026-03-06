# ADR 0001: Use rquickjs (QuickJS) for the Code Mode engine, not deno_core (V8)

**Status:** Accepted

## Context

The Code Mode engine must execute untrusted, LLM-generated JS/TS that calls
