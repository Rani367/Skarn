//! The Skarn gateway: aggregate downstream MCP servers behind a tiny Code
//! Mode tool surface (`search` / `read_tool_docs` / `execute`).
//!
//! ```no_run
//! # async fn run() -> skarn_common::Result<()> {
//! use skarn_codemode::ExecLimits;
//! use skarn_gateway::{GatewayConfig, build_server, serve_stdio};
//!
