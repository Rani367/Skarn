import { CRATE, CRATES, REPO } from '../data/content'
import { GitHubIcon, RustIcon, ShieldIcon } from './ui/Icons'
import './footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="footer-logo" href="#top">
            <span className="nav-mark">
              <ShieldIcon width={18} height={18} />
            </span>
            <span>Skarn</span>
          </a>
          <p className="footer-tag">
            An OS-sandboxed MCP gateway with Code Mode and shell-output token compression — in one Rust binary.
          </p>
          <div className="footer-links">
            <a href={REPO} target="_blank" rel="noreferrer noopener">
              <GitHubIcon width={16} height={16} /> GitHub
            </a>
            <a href={CRATE} target="_blank" rel="noreferrer noopener">
              <RustIcon width={16} height={16} /> crates.io
            </a>
            <a href={`${REPO}/blob/main/SECURITY.md`} target="_blank" rel="noreferrer noopener">
              Security
            </a>
            <a href={`${REPO}/tree/main/docs`} target="_blank" rel="noreferrer noopener">
              Docs
            </a>
          </div>
        </div>

        <div className="footer-crates">
          <span className="footer-col-title mono">the workspace</span>
          <ul>
            {CRATES.map((c) => (
              <li key={c.name}>
                <code className="mono">{c.name}</code>
                <span>{c.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-base">
        <span className="mono">MIT or Apache-2.0</span>
        <span className="mono">© Skarn contributors · built in Rust</span>
      </div>
    </footer>
  )
}
