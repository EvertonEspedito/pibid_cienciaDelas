/**
 * Elementos decorativos de ciência (átomo, molécula, circuito, estrelas).
 * Todos usam `currentColor`/tokens e são aria-hidden — são só ornamento.
 */

interface MotifProps {
  className?: string
}

export function AtomMotif({ className = '' }: MotifProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <g stroke="rgb(var(--brand))" strokeWidth="2" opacity="0.55">
        <ellipse cx="200" cy="200" rx="170" ry="62" transform="rotate(-30 200 200)" />
        <ellipse cx="200" cy="200" rx="170" ry="62" transform="rotate(30 200 200)" />
        <ellipse cx="200" cy="200" rx="170" ry="62" transform="rotate(90 200 200)" />
      </g>
      <circle cx="200" cy="200" r="22" fill="rgb(var(--accent))" />
      <circle cx="345" cy="130" r="9" fill="rgb(var(--mint))" />
      <circle cx="70" cy="278" r="9" fill="rgb(var(--brand))" />
      <circle cx="200" cy="30" r="9" fill="rgb(var(--accent))" />
    </svg>
  )
}

export function MoleculeMotif({ className = '' }: MotifProps) {
  return (
    <svg viewBox="0 0 240 200" fill="none" aria-hidden="true" className={className}>
      <g stroke="rgb(var(--brand))" strokeWidth="3" strokeLinecap="round" opacity="0.5">
        <line x1="120" y1="100" x2="60" y2="60" />
        <line x1="120" y1="100" x2="185" y2="65" />
        <line x1="120" y1="100" x2="130" y2="165" />
        <line x1="185" y1="65" x2="225" y2="105" />
      </g>
      <circle cx="120" cy="100" r="18" fill="rgb(var(--accent))" />
      <circle cx="60" cy="60" r="12" fill="rgb(var(--brand))" />
      <circle cx="185" cy="65" r="14" fill="rgb(var(--mint))" />
      <circle cx="130" cy="165" r="11" fill="rgb(var(--brand))" />
      <circle cx="225" cy="105" r="8" fill="rgb(var(--accent))" />
    </svg>
  )
}

export function CircuitMotif({ className = '' }: MotifProps) {
  return (
    <svg viewBox="0 0 320 120" fill="none" aria-hidden="true" className={className}>
      <g stroke="rgb(var(--brand))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <path d="M0 30h90v30h70V20h160" />
        <path d="M0 95h60v-15h110v25h150" />
      </g>
      <g fill="rgb(var(--accent))">
        <circle cx="90" cy="30" r="5" />
        <circle cx="160" cy="20" r="5" />
        <circle cx="170" cy="80" r="5" />
      </g>
      <rect x="226" y="10" width="26" height="26" rx="6" fill="rgb(var(--mint))" opacity="0.8" />
    </svg>
  )
}

export function SparkleMotif({ className = '' }: MotifProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z" />
    </svg>
  )
}
