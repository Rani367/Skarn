// All marketing copy + figures live here so the components stay structural.
// Figures are taken verbatim from the Skarn README.

export const REPO = 'https://github.com/Rani367/Skarn'
export const SITE = 'https://rani367.github.io/Skarn/'
export const CRATE = 'https://crates.io/crates/skarn'
export const INSTALL_ONELINER = 'curl -fsSL https://rani367.github.io/Skarn/install.sh | sh'
export const CARGO_INSTALL = 'cargo install skarn'

export const TAGLINE =
  'A fast, OS-sandboxed Model Context Protocol gateway with an embedded Code Mode engine and shell-output token compression — in a single Rust binary.'

export const PUNCHLINE =
  "Cut your agent's API bill while physically stopping it from wiping your disk or exfiltrating your secrets."

/* the three dangerous habits ------------------------------------------------ */
export const PROBLEMS = [
  {
    n: '01',
    title: 'Token bloat',
    body: 'Agents pump raw cargo test / npm install output and hundreds of MCP tool schemas straight into the context window.',
  },
  {
    n: '02',
    title: 'The MCP scaling wall',
    body: 'Attach a few MCP servers and the model now carries the JSON Schemas of every tool, on every single turn.',
  },
  {
    n: '03',
    title: 'RCE by design',
    body: 'Letting an agent run shell commands or LLM-generated code is remote code execution on your machine.',
  },
] as const

/* code mode reduction figures ----------------------------------------------- */
export const CODE_MODE_STATS = [
  { scenario: '16 servers / 508 tools, multi-step task', classic: '~150,000', skarn: '~2,000', cut: 99 },
  { scenario: 'Single 3-tool workflow', classic: '~20,700', skarn: '~1,100', cut: 95 },
] as const

export const CODE_MODE_EXAMPLE = `// The model writes this; Skarn runs it in a hermetic, OS-sandboxed isolate.
const issues = await skarn.server("github").search_issues({ q: "is:open label:bug" });
const stale  = issues.filter(i => daysSince(i.updated_at) > 90);   // filtering happens HERE
await skarn.server("slack").post_message({ channel: "#triage", text: summarize(stale) });
return { staleCount: stale.length };                                // only this returns to the model`

/* compression scenarios ----------------------------------------------------- */
export interface Scenario {
  cmd: string
  label: string
  raw: number
  compressed: number
  cut: number
}

export const SCENARIOS: Scenario[] = [
  { cmd: 'cargo test', label: 'cargo test', raw: 25000, compressed: 2500, cut: 90 },
  { cmd: 'npm install', label: 'npm install', raw: 16000, compressed: 3200, cut: 80 },
  { cmd: 'git diff', label: 'git diff', raw: 10000, compressed: 2500, cut: 75 },
  { cmd: 'ls / tree', label: 'ls · tree', raw: 2000, compressed: 400, cut: 80 },
]

/* sandbox platforms --------------------------------------------------------- */
export const PLATFORMS = [
  {
    os: 'macOS',
    mechanism: 'Seatbelt',
    detail: 'sandbox_init',
    cold: '< 5 ms',
    glyph: 'apple',
  },
  {
    os: 'Linux',
    mechanism: 'Landlock + seccomp',
    detail: 'LSM · seccomp-bpf',
    cold: '< 5 ms',
    glyph: 'linux',
  },
  {
    os: 'Windows',
    mechanism: 'AppContainer',
    detail: 'AppContainer + Job Object',
    cold: '< 10 ms',
    glyph: 'windows',
  },
] as const

/* integrations -------------------------------------------------------------- */
export const INTEGRATIONS = [
  {
    name: 'Claude Code / Codex CLI',
    body: 'Run skarn hook for a PreToolUse hook that routes shell commands through skarn run — sandbox + compression, no prompt changes.',
    code: 'skarn hook',
  },
  {
    name: 'Cursor / Windsurf',
    body: 'Set Skarn as an MCP server in the IDE config to get Code Mode aggregation across every downstream tool.',
    code: '{ "mcpServers": { "skarn": { "command": "skarn", "args": ["serve"] } } }',
  },
] as const

export const QUICKSTART = [
  { c: 'skarn init', d: 'Scaffold a config and see integration snippets' },
  { c: 'skarn doctor', d: 'Check which kernel sandbox is active on your machine' },
  { c: "skarn exec --code 'return (await skarn.listTools()).length'", d: 'Try a Code Mode script against your servers' },
  { c: 'skarn run --net deny -- cargo test', d: 'Compress + sandbox a shell command directly' },
] as const

export const STATUS_NOTE =
  'Skarn is young. The macOS (Seatbelt) and Linux (Landlock + seccomp) sandboxes are runtime-verified in CI on every push; Windows AppContainer is the least exercised backend so far. By design it runs untrusted, model-generated code — read SECURITY.md for the threat model before you point a real agent at it.'

export const CRATES = [
  { name: 'skarn-sandbox', role: 'OS-native sandbox abstraction (Seatbelt / Landlock+seccomp / AppContainer)' },
  { name: 'skarn-compress', role: 'YAML-driven shell-output token compression' },
  { name: 'skarn-codemode', role: 'Hermetic QuickJS isolate + oxc TS-strip & AST validation + tool bridge' },
  { name: 'skarn-gateway', role: 'MCP server/client aggregation on the official rmcp SDK' },
  { name: 'skarn', role: 'The skarn CLI tying it all together' },
] as const
