import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>
const base = (p: P) => ({
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  ...p,
})

export const GitHubIcon = (p: P) => (
  <svg {...base(p)} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 .5A11.5 11.5 0 0 0 .5 12.1c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9A11.5 11.5 0 0 0 12 .5Z"
    />
  </svg>
)

export const RustIcon = (p: P) => (
  <svg {...base(p)} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2.2a2 2 0 0 0-1.4 3.4l-.5.9-1.1-.3a2 2 0 1 0-2.4 2.6L7 9.8a5.9 5.9 0 0 0 0 4.4l-.4 1a2 2 0 1 0 2.4 2.6l1.1-.3.5.9A2 2 0 1 0 14 18l-.2-1 .9-.5.8.8a2 2 0 1 0 1.4-3.3 5.9 5.9 0 0 0 0-4l.3-.2a2 2 0 1 0-2-3.2l-.9.7-.9-.5.2-1A2 2 0 0 0 12 2.2Zm0 4.6a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 2.1a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z"
    />
  </svg>
)

export const CopyIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="9" y="9" width="11" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M5 15.5A1.8 1.8 0 0 1 4 14V5.5C4 4.7 4.7 4 5.5 4H14a1.8 1.8 0 0 1 1.5 1"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
)

export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path
      d="M12 3 5 6v5.5c0 4.2 2.9 7.4 7 8.5 4.1-1.1 7-4.3 7-8.5V6l-7-3Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="m9 12 2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const AppleIcon = (p: P) => (
  <svg {...base(p)}>
    <path
      fill="currentColor"
      d="M16 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.7 2.3 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.1 0 1.9-1.1 2.6-2.2.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.4ZM13.8 5.9c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2Z"
    />
  </svg>
)

export const LinuxIcon = (p: P) => (
  <svg {...base(p)}>
    <path
      fill="currentColor"
      d="M12 2c-2 0-3.2 1.7-3.2 3.8 0 1.3.3 2 .3 3 0 1-.7 1.8-1.6 3.2-1 1.5-2 3-2 4.7 0 .8.3 1.3.9 1.6-.1.5 0 1 .4 1.4.6.6 1.7.6 2.6.5.6 0 1.1-.3 1.6-.3h1.9c.5 0 1 .3 1.6.3.9.1 2 .1 2.6-.5.4-.4.5-.9.4-1.4.6-.3.9-.8.9-1.6 0-1.7-1-3.2-2-4.7-.9-1.4-1.6-2.2-1.6-3.2 0-1 .3-1.7.3-3C15.2 3.7 14 2 12 2Zm-1.5 4c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm3 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9Zm-1.5 2.4c.8 0 1.7.6 2.2 1.1.2.2.1.4-.2.5l-1.7.8c-.2.1-.4.1-.6 0l-1.7-.8c-.3-.1-.4-.3-.2-.5.5-.5 1.4-1.1 2.2-1.1Z"
    />
  </svg>
)

export const WindowsIcon = (p: P) => (
  <svg {...base(p)}>
    <path fill="currentColor" d="M3 5.4 11 4.3v7.2H3V5.4Zm0 7.3h8v7.1L3 18.6v-5.9Zm9-8.5L21 3v8.5h-9V4.2Zm0 8.5h9V21l-9-1.3v-7Z" />
  </svg>
)

export const BoltIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
  </svg>
)

export const LayersIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const CompressIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M9 4H5v4m10-4h4v4M9 20H5v-4m10 4h4v-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 9v6m-2.5-2.5L12 15l2.5-2.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
