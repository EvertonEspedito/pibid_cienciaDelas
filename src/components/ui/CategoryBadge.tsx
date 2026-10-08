interface CategoryBadgeProps {
  name: string
  tone?: 'brand' | 'accent' | 'mint'
  className?: string
}

const tones = {
  brand: 'bg-brand-soft text-brand',
  accent: 'bg-accent-soft text-accent',
  mint: 'bg-mint-soft text-mint',
}

/** Etiqueta de categoria. A cor é derivada do nome para dar variedade consistente. */
export function CategoryBadge({ name, tone, className = '' }: CategoryBadgeProps) {
  const keys = Object.keys(tones) as Array<keyof typeof tones>
  const auto = keys[[...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % keys.length]
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone ?? auto]} ${className}`}>
      {name}
    </span>
  )
}
