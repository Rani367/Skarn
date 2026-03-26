//! The bridge between a Code Mode isolate and the real MCP servers.
//!
//! The isolate is hermetic: it has no filesystem, no network, no `fetch`. Its
