//! Windows backend — AppContainer isolation plus a Job Object for resource
//! limits and tree-kill.
//!
//! Unlike Unix, a Windows process cannot move *itself* into an AppContainer, so
//! the parent must launch the worker into one. We:
