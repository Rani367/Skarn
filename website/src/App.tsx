import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { CodeMode } from './components/CodeMode'
import { Compression } from './components/Compression'
import { Sandbox } from './components/Sandbox'
import { Architecture } from './components/Architecture'
import { Integrations } from './components/Integrations'
import { Install } from './components/Install'
import { Footer } from './components/Footer'
import './app.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="seam" aria-hidden="true" />
        <Problem />
        <CodeMode />
        <Compression />
        <Sandbox />
        <Architecture />
        <Integrations />
        <Install />
      </main>
      <Footer />
    </>
  )
}
