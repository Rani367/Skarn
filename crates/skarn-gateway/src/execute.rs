//! Running a Code Mode script — in-process, or in a dedicated OS-sandboxed
//! worker subprocess.
//!
//! Two execution strategies share one servicer pattern (fulfil host tool calls
//! against the [`DownstreamManager`] that owns the MCP clients):
