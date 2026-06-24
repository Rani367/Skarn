import { useMemo } from 'react'
import { highlight } from './highlight'
import { CopyButton } from './CopyButton'
import './code.css'

interface CodeBlockProps {
  code: string
  lang: 'ts' | 'bash'
  title?: string
  copy?: boolean
}

export function CodeBlock({ code, lang, title, copy = true }: CodeBlockProps) {
  const html = useMemo(() => highlight(code, lang), [code, lang])

  return (
    <div className="codeblock">
      <div className="codeblock-bar">
        <div className="codeblock-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {title && <span className="codeblock-title mono">{title}</span>}
        {copy && <CopyButton text={code} />}
      </div>
      <pre className="codeblock-body mono">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  )
}
