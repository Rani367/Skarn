//! The wire protocol between the gateway (parent) and the sandboxed Code Mode
//! worker (child).
//!
//! Framing is newline-delimited JSON. The parent writes a single [`JobMsg`] to
//! the worker's stdin, then services [`WorkerMsg::Request`] messages from the
//! worker's stdout by writing a [`ReplyMsg`] back to stdin for each, until the
