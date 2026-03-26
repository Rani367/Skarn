//! Static validation + TypeScript stripping via `oxc`.
//!
//! Before any LLM-generated script runs, we parse it, walk the AST, and reject
//! anything that could escape the hermetic isolate — `import`/`require`/`eval`,
