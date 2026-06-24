import { useEffect, useState } from 'react'
import { REPO } from '../data/content'
import { GitHubIcon, ShieldIcon } from './ui/Icons'
import './nav.css'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="nav-brand" href="#top" aria-label="Skarn — home">
          <span className="nav-mark">
            <ShieldIcon width={18} height={18} />
          </span>
          <span className="nav-word">Skarn</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          <a href="#code-mode">Code Mode</a>
          <a href="#compression">Compression</a>
          <a href="#sandbox">Sandbox</a>
          <a href="#install">Install</a>
        </nav>

        <a className="nav-gh" href={REPO} target="_blank" rel="noreferrer noopener">
          <GitHubIcon width={18} height={18} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}
