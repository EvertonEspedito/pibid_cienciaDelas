import type { ElementType, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  as?: ElementType
  className?: string
}

/** Limita a largura do conteúdo e aplica o espaçamento lateral padrão. */
export function Container({ children, as: Tag = 'div', className = '' }: ContainerProps) {
  return <Tag className={`container ${className}`}>{children}</Tag>
}
