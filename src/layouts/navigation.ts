import { gallery } from '@/data/gallery'
import { projects } from '@/data/projects'
import { timeline } from '@/data/timeline'

export interface NavItem {
  /** id da seção na página (#id). */
  id: string
  label: string
}

/** Menu da landing page. Seções sem conteúdo (ex.: galeria vazia) somem automaticamente. */
export const NAV_ITEMS: NavItem[] = [
  { id: 'sobre', label: 'Sobre' },
  ...(projects.some((p) => p.featured) ? [{ id: 'exposicao', label: 'Exposição' }] : []),
  ...(projects.length > 0 ? [{ id: 'projetos', label: 'Projetos' }] : []),
  ...(timeline.length > 0 ? [{ id: 'jornada', label: 'Jornada' }] : []),
  ...(gallery.length > 0 ? [{ id: 'galeria', label: 'Galeria' }] : []),
  { id: 'contato', label: 'Contato' },
]
