//! Gateway configuration, parsed from `skarn.toml`.

use std::collections::BTreeMap;
use std::path::PathBuf;

use serde::{Deserialize, Serialize};
use skarn_common::{Error, Result};

/// Top-level gateway configuration.
#[derive(Clone, Debug, Default, Serialize, Deserialize)]
#[serde(default)]
pub struct GatewayConfig {
    /// Upstream-facing settings.
    pub gateway: GatewaySettings,
    /// Downstream MCP servers to aggregate, keyed by alias.
    pub servers: BTreeMap<String, ServerConfig>,
