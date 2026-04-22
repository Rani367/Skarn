//! Connects to and aggregates downstream MCP servers.

use std::collections::HashMap;
use std::sync::Arc;

use arc_swap::ArcSwap;
use async_trait::async_trait;
use rmcp::model::{
