import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CopyIcon, CheckIcon } from './Icons'
import './copy.css'

interface CopyButtonProps {
  text: string
  label?: string
}

export function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // older / insecure contexts
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button className="copy-btn" onClick={copy} aria-label={copied ? 'Copied' : `${label} to clipboard`} data-copied={copied}>
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="done"
            className="copy-inner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.16 }}
          >
            <CheckIcon width={16} height={16} /> Copied
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            className="copy-inner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.16 }}
          >
            <CopyIcon width={16} height={16} /> {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
