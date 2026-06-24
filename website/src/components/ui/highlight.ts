// Tiny, dependency-free highlighter. Not a real parser — just enough token
// classes to make the two code samples read clearly in the mineral palette.
// Strings and comments are pulled out first so keyword regexes never reach
// inside them. Returns an HTML string (already escaped).

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const span = (cls: string, s: string) => `<span class="t-${cls}">${esc(s)}</span>`

const KEYWORDS =
  /^(const|let|var|await|async|return|function|for|of|in|if|else|new|import|from|export|true|false|null|undefined)\b/

export function highlight(code: string, lang: 'ts' | 'bash'): string {
  return code
    .split('\n')
    .map((line) => highlightLine(line, lang))
    .join('\n')
}

function highlightLine(line: string, lang: 'ts' | 'bash'): string {
  let out = ''
  let rest = line

  while (rest.length) {
    // whole-line bash comment
    if (lang === 'bash') {
      const m = rest.match(/^(\s*)(#.*)$/)
      if (m) {
        out += esc(m[1]) + span('c', m[2])
        break
      }
    }

    // inline // comment (only when not inside a string)
    if (lang === 'ts') {
      const ci = rest.indexOf('//')
      if (ci !== -1 && !insideString(rest.slice(0, ci))) {
        // highlight the code before the comment, then the comment verbatim
        out += highlightCode(rest.slice(0, ci))
        out += span('c', rest.slice(ci))
        break
      }
    }

    out += highlightCode(rest)
    break
  }

  return out
}

// highlight a stretch of code that contains no comments
function highlightCode(src: string): string {
  let out = ''
  let rest = src

  while (rest.length) {
    // strings
    const sm = rest.match(/^(["'`])(?:\\.|(?!\1).)*\1/)
    if (sm) {
      out += span('s', sm[0])
      rest = rest.slice(sm[0].length)
      continue
    }
    // numbers
    const nm = rest.match(/^\b\d[\d_]*\b/)
    if (nm) {
      out += span('n', nm[0])
      rest = rest.slice(nm[0].length)
      continue
    }
    // keywords
    const km = rest.match(KEYWORDS)
    if (km) {
      out += span('k', km[0])
      rest = rest.slice(km[0].length)
      continue
    }
    // function call  foo(
    const fm = rest.match(/^[A-Za-z_$][\w$]*(?=\s*\()/)
    if (fm) {
      out += span('f', fm[0])
      rest = rest.slice(fm[0].length)
      continue
    }
    // bare identifiers
    const wm = rest.match(/^[A-Za-z_$][\w$]*/)
    if (wm) {
      out += esc(wm[0])
      rest = rest.slice(wm[0].length)
      continue
    }
    // punctuation / operators
    const ch = rest[0]
    const cls = '{}()[]'.includes(ch) ? 'p' : '=+-*/<>|&.:'.includes(ch) ? 'o' : ''
    out += cls ? span(cls, ch) : esc(ch)
    rest = rest.slice(1)
  }

  return out
}

function insideString(s: string): boolean {
  return (s.match(/["'`]/g) || []).length % 2 === 1
}
