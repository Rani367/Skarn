import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import './architecture.css'

// A motion token that drifts between two points, forever.
function FlowDot({
  from,
  to,
  color,
  delay = 0,
  dur = 2.4,
  reduce,
}: {
  from: [number, number]
  to: [number, number]
  color: string
  delay?: number
  dur?: number
  reduce: boolean
}) {
  if (reduce) {
    return <circle cx={(from[0] + to[0]) / 2} cy={(from[1] + to[1]) / 2} r={3.5} fill={color} />
  }
  return (
    <motion.circle
      r={3.5}
      fill={color}
      initial={{ cx: from[0], cy: from[1], opacity: 0 }}
      animate={{
        cx: [from[0], to[0]],
        cy: [from[1], to[1]],
        opacity: [0, 1, 1, 0],
      }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'linear', times: [0, 0.1, 0.9, 1] }}
      style={{ filter: `drop-shadow(0 0 5px ${color})` }}
    />
  )
}

export function Architecture() {
  const reduce = !!useReducedMotion()

  return (
    <section className="section architecture" id="architecture">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Architecture</span>
            <h2>Big payloads stay in the box. Only the summary comes back.</h2>
            <p>
              The agent sends a tiny script. Skarn runs it in a sandboxed isolate that talks to your downstream MCP
              servers, keeps the megabyte intermediate data inside the boundary, and returns a compressed result.
            </p>
          </Reveal>
        </div>

        <Reveal className="arch-frame">
          <svg viewBox="0 0 960 380" className="arch-svg" role="img" aria-label="Data flow: agent to Code Mode isolate to MCP servers, with only a compressed summary returning to the agent.">
            <defs>
              <linearGradient id="boundary" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#e2552b" stopOpacity="0.6" />
                <stop offset="0.5" stopColor="#c9a23f" stopOpacity="0.5" />
                <stop offset="1" stopColor="#2fd4b6" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* connector lines */}
            <g className="arch-lines">
              <path d="M184 168 H270" />
              <path d="M270 214 H184" className="arch-return" />
              <path d="M480 162 L556 122" />
              <path d="M480 218 L556 258" />
              <path d="M706 121 H760" />
              <path d="M706 259 H760" />
            </g>

            {/* flow tokens */}
            <FlowDot from={[184, 168]} to={[270, 168]} color="#ff7a45" reduce={reduce} />
            <FlowDot from={[480, 162]} to={[556, 122]} color="#ff7a45" delay={0.5} reduce={reduce} />
            <FlowDot from={[480, 218]} to={[556, 258]} color="#ff7a45" delay={0.8} reduce={reduce} />
            <FlowDot from={[270, 214]} to={[184, 214]} color="#2fd4b6" delay={1.2} dur={2.2} reduce={reduce} />

            {/* Skarn boundary */}
            <rect x="232" y="28" width="700" height="324" rx="20" className="arch-boundary" fill="url(#boundary)" fillOpacity="0.025" />
            <text x="252" y="54" className="arch-boundary-label">SKARN · ONE BINARY</text>

            {/* agent */}
            <g className="arch-node arch-agent">
              <rect x="24" y="128" width="160" height="92" rx="14" />
              <text x="104" y="166" className="arch-node-title">AI agent</text>
              <text x="104" y="190" className="arch-node-sub">Claude Code · Cursor</text>
            </g>

            {/* isolate */}
            <g className="arch-node arch-isolate">
              <rect x="270" y="120" width="210" height="108" rx="14" />
              <text x="375" y="156" className="arch-node-title">Code Mode isolate</text>
              <text x="375" y="180" className="arch-node-sub">QuickJS · hermetic</text>
              <text x="375" y="200" className="arch-node-sub arch-sandbox-tag">OS-sandboxed</text>
            </g>

            {/* clients */}
            <g className="arch-node arch-client">
              <rect x="556" y="92" width="150" height="60" rx="12" />
              <text x="631" y="127" className="arch-node-small">MCP client</text>
            </g>
            <g className="arch-node arch-client">
              <rect x="556" y="228" width="150" height="60" rx="12" />
              <text x="631" y="263" className="arch-node-small">MCP client</text>
            </g>

            {/* downstream */}
            <g className="arch-node arch-down">
              <rect x="760" y="92" width="150" height="60" rx="12" />
              <text x="835" y="127" className="arch-node-small">Postgres MCP</text>
            </g>
            <g className="arch-node arch-down">
              <rect x="760" y="228" width="150" height="60" rx="12" />
              <text x="835" y="263" className="arch-node-small">GitHub MCP</text>
            </g>

            {/* labels */}
            <text x="227" y="150" className="arch-flow-label arch-flow-fwd" textAnchor="end">search / execute · ≈1k tokens</text>
            <text x="227" y="236" className="arch-flow-label arch-flow-ret" textAnchor="end">compressed summary</text>
          </svg>

          <div className="arch-callouts">
            <span className="pill">
              <i className="arch-pill-dot fwd" /> in: ≈1k-token script
            </span>
            <span className="pill">
              <i className="arch-pill-dot stay" /> 1,000-row payload never leaves the box
            </span>
            <span className="pill">
              <i className="arch-pill-dot ret" /> out: compressed result
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
