// Copy the canonical repo-root install.sh into public/ so it is served at the
// Pages root (https://rani367.github.io/Skarn/install.sh). Keeping a single
// source of truth means the hosted installer can never drift from the real one.
import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const src = resolve(here, '..', '..', 'install.sh')
const destDir = resolve(here, '..', 'public')
const dest = resolve(destDir, 'install.sh')

if (!existsSync(src)) {
  console.error(`[copy-install] canonical installer not found at ${src}`)
  process.exit(1)
}

mkdirSync(destDir, { recursive: true })
copyFileSync(src, dest)
console.log(`[copy-install] ${src} -> ${dest}`)
