/** Marca "Ciência Delas": átomo estilizado + nome. Leva ao topo da página. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#inicio" aria-label="Ciência Delas — voltar ao início" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="rgb(var(--brand))" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#ff8fa3" strokeWidth="3" transform="rotate(-30 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#7ee0c3" strokeWidth="3" transform="rotate(30 32 32)" />
        <circle cx="32" cy="32" r="6" fill="rgb(var(--on-brand))" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-ink">
        Ciência <span className="text-accent">Delas</span>
      </span>
    </a>
  )
}
