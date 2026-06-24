import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { SCENARIOS } from '../data/content'
import './furnace.css'

const CELLS = 120
const COLS = 12
const ERRORS_KEPT = 3 // a few embers that always survive

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const easeOutExpo = (p: number) => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p))

export function TokenFurnace() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(1) // 1 = fully compressed
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const started = useRef(false)

  const sc = SCENARIOS[active]

  // how many of the CELLS survive compression, proportional to the ratio
  const survivors = useMemo(() => Math.max(ERRORS_KEPT + 5, Math.round(CELLS * (sc.compressed / sc.raw))), [sc])

  const run = () => {
    if (reduce) {
      setProgress(1)
      return
    }
    setProgress(0)
    const startCount = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startCount) / 1500, 1)
      setProgress(p)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  // first reveal: play the burn-down once it scrolls in
  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      run()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const select = (i: number) => {
    setActive(i)
    // run on next frame so `survivors` recomputes with the new scenario
    requestAnimationFrame(run)
  }

  const eased = easeOutExpo(progress)
  const liveCount = Math.round(lerp(sc.raw, sc.compressed, eased))
  const burned = 1 - eased

  return (
    <div className="furnace panel" ref={ref}>
      <div className="furnace-bar">
        <span className="furnace-prompt mono">
          <span className="text-malachite">skarn</span> run --stats --
        </span>
        <div className="furnace-tabs" role="tablist" aria-label="Compression scenario">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.cmd}
              role="tab"
              aria-selected={i === active}
              className={`furnace-tab mono ${i === active ? 'is-active' : ''}`}
              onClick={() => select(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="furnace-grid" aria-hidden="true">
        {Array.from({ length: CELLS }).map((_, i) => {
          const isSurvivor = i < survivors
          const isError = i < ERRORS_KEPT
          const col = i % COLS
          const row = Math.floor(i / COLS)
          // dying cells fade & sink as the burn progresses
          const cellOpacity = isSurvivor ? 1 : Math.max(0, 1 - burned * 1.4 - (row / (CELLS / COLS)) * 0.2)
          const hot = isError ? 0 : isSurvivor ? eased : 0.15
          return (
            <span
              key={i}
              className={`cell ${isSurvivor ? 'cell-survivor' : ''} ${isError ? 'cell-error' : ''}`}
              style={{
                opacity: cellOpacity,
                transform: isSurvivor ? `translateY(0)` : `translateY(${burned * 6}px)`,
                // hot=0 ember, hot=1 malachite
                background: isError
                  ? 'var(--ember-bright)'
                  : `rgb(${Math.round(lerp(226, 47, hot))}, ${Math.round(lerp(85, 212, hot))}, ${Math.round(lerp(43, 182, hot))})`,
                transitionDelay: `${col * 6}ms`,
              }}
            />
          )
        })}
      </div>

      <div className="furnace-readout">
        <div className="readout-col">
          <span className="readout-label mono">tokens in context</span>
          <span className="readout-num mono">{liveCount.toLocaleString('en-US')}</span>
          <span className="readout-sub mono">
            from {sc.raw.toLocaleString('en-US')} raw
          </span>
        </div>
        <div className="readout-badge" style={{ opacity: 0.4 + eased * 0.6 }}>
          <span className="badge-cut mono">−{sc.cut}%</span>
          <span className="badge-tokens mono">tokens</span>
        </div>
      </div>

      <p className="furnace-foot mono">
        <span className="foot-dot" /> errors, warnings &amp; failures are always kept
      </p>
    </div>
  )
}
