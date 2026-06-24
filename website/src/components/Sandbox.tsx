import { PLATFORMS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { AppleIcon, BoltIcon, LinuxIcon, ShieldIcon, WindowsIcon } from './ui/Icons'
import './sandbox.css'

const GLYPHS = {
  apple: AppleIcon,
  linux: LinuxIcon,
  windows: WindowsIcon,
} as const

export function Sandbox() {
  return (
    <section className="section sandbox" id="sandbox">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">
              <ShieldIcon width={14} height={14} /> OS-native sandboxing
            </span>
            <h2>Kernel-enforced confinement. No Docker required.</h2>
            <p>
              <code className="mono inline-code">skarn run -- &lt;cmd&gt;</code> confines a command to your project
              directory and denies network egress — enforced by the kernel itself, not a daemon or a VM.
            </p>
          </Reveal>
        </div>

        <div className="sandbox-grid">
          {PLATFORMS.map((p, i) => {
            const Glyph = GLYPHS[p.glyph]
            return (
              <Reveal key={p.os} delay={i * 0.08} className="sandbox-card edge-lit">
                <div className="sandbox-card-head">
                  <span className="sandbox-glyph">
                    <Glyph width={22} height={22} />
                  </span>
                  <h3>{p.os}</h3>
                </div>
                <p className="sandbox-mech">{p.mechanism}</p>
                <p className="sandbox-detail mono">{p.detail}</p>
                <div className="sandbox-cold">
                  <span className="sandbox-cold-num mono">{p.cold}</span>
                  <span className="sandbox-cold-label mono">cold start</span>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1} className="sandbox-compare">
          <div className="compare-row compare-skarn">
            <span className="compare-label">
              <BoltIcon width={16} height={16} /> Skarn
            </span>
            <span className="compare-bar" style={{ width: '4%' }} />
            <span className="compare-val mono">&lt; 5 ms</span>
          </div>
          <div className="compare-row compare-docker">
            <span className="compare-label">Docker</span>
            <span className="compare-bar" style={{ width: '100%' }} />
            <span className="compare-val mono">200 ms+ · root daemon · per-seat licensing</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="sandbox-foot">
            Code Mode <code className="mono inline-code">execute</code> gets the same protection: on macOS and Linux each
            script runs in a dedicated worker process that sandboxes <em>itself</em> before touching model-generated code —
            so an isolate escape still lands inside a kernel-confined process.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
