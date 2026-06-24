import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SCENARIOS } from '../data/content'
import { Reveal } from './ui/Reveal'
import { TokenFurnace } from './TokenFurnace'
import { CompressIcon } from './ui/Icons'
import './compression.css'

const MAX_RAW = Math.max(...SCENARIOS.map((s) => s.raw))

export function Compression() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <section className="section compression" id="compression">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">
              <CompressIcon width={14} height={14} /> Shell-output compression
            </span>
            <h2>Raw logs go in. Signal comes out.</h2>
            <p>
              Declarative, per-tool filters strip the noise from shell output — typically 70–90% fewer tokens — while
              guaranteeing that errors, warnings and failures always survive, even when rescued from a truncated middle.
            </p>
          </Reveal>
        </div>

        <Reveal className="compress-furnace">
          <TokenFurnace />
        </Reveal>

        <Reveal className="compress-cmd">
          <span className="mono">
            <span className="install-prompt">$</span> skarn run --stats -- <span className="text-pyrite">cargo test</span>
          </span>
          <span className="compress-cmd-note">full per-command numbers below</span>
        </Reveal>

        <div className="compress-table" ref={ref}>
          <div className="compress-legend mono">
            <span>
              <i className="dot dot-raw" /> raw
            </span>
            <span>
              <i className="dot dot-comp" /> compressed
            </span>
          </div>

          {SCENARIOS.map((s, i) => {
            const rawW = (s.raw / MAX_RAW) * 100
            const compW = (s.compressed / MAX_RAW) * 100
            return (
              <div className="compress-row" key={s.cmd}>
                <code className="compress-name mono">{s.label}</code>
                <div className="compress-track">
                  <motion.span
                    className="compress-raw"
                    initial={reduce ? { width: `${rawW}%` } : { width: 0 }}
                    animate={inView ? { width: `${rawW}%` } : {}}
                    transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="compress-raw-num mono">{s.raw.toLocaleString('en-US')}</span>
                  </motion.span>
                  <motion.span
                    className="compress-comp"
                    initial={reduce ? { width: `${compW}%` } : { width: 0 }}
                    animate={inView ? { width: `${compW}%` } : {}}
                    transition={{ duration: 0.9, delay: 0.08 * i + 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="compress-comp-num mono">{s.compressed.toLocaleString('en-US')}</span>
                  </motion.span>
                </div>
                <span className="compress-cut mono">−{s.cut}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
