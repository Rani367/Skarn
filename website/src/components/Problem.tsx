import { PROBLEMS } from '../data/content'
import { Reveal } from './ui/Reveal'
import './problem.css'

export function Problem() {
  return (
    <section className="section problem" id="why">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">The problem</span>
            <h2>Autonomous agents have three expensive, dangerous habits.</h2>
            <p>
              Give a model a shell and a few MCP servers and it will quietly burn your context window — and your
              machine — on every turn.
            </p>
          </Reveal>
        </div>

        <div className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="problem-card edge-lit">
              <span className="problem-n mono">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="problem-flare" aria-hidden="true" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="problem-turn">
            <span className="text-malachite">Skarn</span> is one binary that fixes all three.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
