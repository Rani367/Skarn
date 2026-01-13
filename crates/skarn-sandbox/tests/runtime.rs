//! Runtime sandbox enforcement tests.
//!
//! These spawn the `skarn-sandbox-probe` helper (a fresh, single-threaded
//! process) which self-applies a policy and then attempts a single operation.
//! We assert on the probe's exit code. Gated to Unix; on Linux CI runners
//! without Landlock the tests skip themselves.

#![cfg(unix)]
