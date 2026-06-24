import { CARGO_INSTALL, INSTALL_ONELINER, REPO, STATUS_NOTE } from '../data/content'
import { CopyButton } from './ui/CopyButton'
import { Reveal } from './ui/Reveal'
import { GitHubIcon, ShieldIcon } from './ui/Icons'
import './install.css'

export function Install() {
  return (
    <section className="section install-section" id="install">
      <div className="container">
        <Reveal className="install-card">
          <div className="install-glow" aria-hidden="true" />
          <span className="eyebrow">Install</span>
          <h2 className="install-title">One binary. One line. No daemon.</h2>
          <p className="install-sub">
            Pre-built binaries for macOS, Linux and Windows, with a Cargo fallback. Installs the{' '}
            <code className="mono inline-code">skarn</code> binary.
          </p>

          <div className="install-block">
            <span className="install-block-label mono">macOS / Linux</span>
            <div className="install-block-line">
              <code className="mono">
                <span className="install-prompt">$</span> {INSTALL_ONELINER}
              </code>
              <CopyButton text={INSTALL_ONELINER} />
            </div>
          </div>

          <div className="install-block install-block-alt">
            <span className="install-block-label mono">any platform with Rust</span>
            <div className="install-block-line">
              <code className="mono">
                <span className="install-prompt">$</span> {CARGO_INSTALL}
              </code>
              <CopyButton text={CARGO_INSTALL} />
            </div>
          </div>

          <div className="install-actions">
            <a className="btn btn-primary" href={REPO} target="_blank" rel="noreferrer noopener">
              <GitHubIcon width={18} height={18} /> View the source
            </a>
            <a className="btn btn-ghost" href={`${REPO}/blob/main/SECURITY.md`} target="_blank" rel="noreferrer noopener">
              <ShieldIcon width={17} height={17} /> Threat model
            </a>
          </div>

          <p className="install-status">
            <span className="install-status-tag mono">status</span>
            {STATUS_NOTE}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
