import { motion, useReducedMotion } from 'framer-motion'
import { CRATE, INSTALL_ONELINER, PUNCHLINE, REPO, TAGLINE } from '../data/content'
import { TurbulentFlow } from './ui/turbulent-flow'
import { CopyButton } from './ui/CopyButton'
import { ArrowIcon, GitHubIcon, RustIcon, ShieldIcon } from './ui/Icons'
import './hero.css'

export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.15 } },
  }
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="hero" id="top">
      <TurbulentFlow className="hero-flow" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <motion.div className="hero-content container" variants={container} initial="hidden" animate="show">
        <motion.span className="hero-badge" variants={item}>
          <ShieldIcon width={14} height={14} />
          one Rust binary · macOS · Linux · Windows
        </motion.span>

        <motion.h1 className="hero-title" variants={item}>
          Sandbox your agent.
          <br />
          Shrink its token bill.
        </motion.h1>

        <motion.p className="hero-tagline" variants={item}>
          {TAGLINE}
        </motion.p>

        <motion.p className="hero-punch" variants={item}>
          {PUNCHLINE}
        </motion.p>

        <motion.div className="hero-install" variants={item}>
          <span className="install-prompt mono" aria-hidden="true">
            $
          </span>
          <code className="install-cmd mono">{INSTALL_ONELINER}</code>
          <CopyButton text={INSTALL_ONELINER} />
        </motion.div>

        <motion.div className="hero-actions" variants={item}>
          <a className="btn btn-primary" href={REPO} target="_blank" rel="noreferrer noopener">
            <GitHubIcon width={18} height={18} /> Star on GitHub
          </a>
          <a className="btn btn-glass" href="#code-mode">
            See how it works <ArrowIcon width={17} height={17} />
          </a>
          <a className="hero-crate" href={CRATE} target="_blank" rel="noreferrer noopener">
            <RustIcon width={16} height={16} /> cargo install skarn
          </a>
        </motion.div>
      </motion.div>

      {!reduce && (
        <motion.div
          className="hero-scroll"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span className="hero-scroll-track">
            <span className="hero-scroll-dot" />
          </span>
        </motion.div>
      )}
    </section>
  )
}
