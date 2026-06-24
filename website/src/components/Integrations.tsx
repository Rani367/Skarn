import { INTEGRATIONS, QUICKSTART } from '../data/content'
import { CopyButton } from './ui/CopyButton'
import { Reveal } from './ui/Reveal'
import './integrations.css'

export function Integrations() {
  return (
    <section className="section integrations" id="quickstart">
      <div className="container">
        <div className="integrations-layout">
          <div className="integrations-left">
            <div className="section-head">
              <Reveal>
                <span className="eyebrow">Fits your agent</span>
                <h2>Drop it in. No prompt changes.</h2>
                <p>Point an existing agent at Skarn and it inherits sandboxing, compression and Code Mode aggregation.</p>
              </Reveal>
            </div>

            <div className="integration-cards">
              {INTEGRATIONS.map((it, i) => (
                <Reveal key={it.name} delay={i * 0.08} className="integration-card">
                  <h3>{it.name}</h3>
                  <p>{it.body}</p>
                  <div className="integration-code mono">
                    <code>{it.code}</code>
                    <CopyButton text={it.code} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="quickstart" delay={0.1}>
            <div className="quickstart-head mono">
              <span className="qs-dot" /> <span className="qs-dot" /> <span className="qs-dot" />
              <span className="quickstart-title">quickstart</span>
            </div>
            <ol className="quickstart-list">
              {QUICKSTART.map((q, i) => (
                <li key={q.c}>
                  <span className="qs-n mono">{i + 1}</span>
                  <div className="qs-body">
                    <code className="qs-cmd mono">
                      <span className="qs-prompt">$</span> {q.c}
                    </code>
                    <span className="qs-desc">{q.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
