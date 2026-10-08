import type { ReactNode } from 'react'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  /** Nível do título (padrão h2). Páginas usam h1 via PageHeader. */
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionTitle({ eyebrow, title, description, align = 'left', as: Tag = 'h2', className = '' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  )
}
