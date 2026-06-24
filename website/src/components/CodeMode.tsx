import { CODE_MODE_EXAMPLE, CODE_MODE_STATS } from '../data/content'
import { CodeBlock } from './ui/CodeBlock'
import { Counter } from './ui/Counter'
import { Reveal } from './ui/Reveal'
import { LayersIcon } from './ui/Icons'
import './codemode.css'

export function CodeMode() {
  return (
    <section className="section codemode" id="code-mode">
      <div className="container">
        <div className="codemode-top">
          <div className="section-head codemode-head">
            <Reveal>
              <span className="eyebrow">
                <LayersIcon width={14} height={14} /> Code Mode
              </span>
              <h2>Give the agent an API, not a schema dump.</h2>
              <p>
                Instead of injecting every tool's JSON Schema, the gateway exposes three meta-tools —{' '}
                <code className="mono inline-code">search</code>, <code className="mono inline-code">read_tool_docs</code>,{' '}
                <code className="mono inline-code">execute</code>. The model writes a short script and hands it to{' '}
                <code className="mono inline-code">execute()</code>; the megabyte intermediate result never touches the
                context window.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="codemode-body">
          <Reveal className="codemode-code">
            <CodeBlock code={CODE_MODE_EXAMPLE} lang="ts" title="orchestration.ts — written by the model" />
            <p className="codemode-note mono">
              <span className="text-malachite">▸</span> the 1,000-row intermediate result stays inside the box
            </p>
          </Reveal>

          <Reveal className="codemode-stats" delay={0.1}>
            {CODE_MODE_STATS.map((s) => (
              <div className="cm-stat" key={s.scenario}>
                <div className="cm-stat-cut">
                  <Counter to={s.cut} suffix="%" />
                  <span className="cm-stat-cut-label mono">fewer input tokens</span>
                </div>
                <p className="cm-stat-scenario">{s.scenario}</p>
                <div className="cm-stat-flow mono">
                  <span className="cm-from">{s.classic}</span>
                  <span className="cm-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="cm-to">{s.skarn}</span>
                </div>
                <div className="cm-bar" aria-hidden="true">
                  <span className="cm-bar-fill" style={{ width: `${100 - s.cut}%` }} />
                </div>
              </div>
            ))}
            <p className="cm-foot mono">figures from the published Code Mode literature · varies with catalog size</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
