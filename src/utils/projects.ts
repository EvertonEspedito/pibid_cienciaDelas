import type { MaterialType, Project } from '@/data/types'
import { resolveAsset } from './assets'
import { placeholderImage } from './placeholder'
import { normalize } from './text'

export const MATERIAL_LABELS: Record<MaterialType, string> = {
  video: 'Vídeo',
  poster: 'Pôster',
  site: 'Site',
  slide: 'Slide',
  pdf: 'PDF',
  documento: 'Documento',
  imagem: 'Imagem',
  outro: 'Outro',
}

/** Ordem das opções no filtro "Tipo de material". */
export const MATERIAL_ORDER: MaterialType[] = ['video', 'poster', 'site', 'slide', 'pdf', 'documento', 'imagem']

/** Tipos de material que um projeto possui (derivados de vídeos, imagens e links). */
export function materialsOf(project: Project): MaterialType[] {
  const types = new Set<MaterialType>()
  if (project.videos?.length) types.add('video')
  if (project.images?.length) types.add('imagem')
  project.links?.forEach((link) => types.add(link.type))
  return [...types]
}

/** Capa do projeto: foto informada ou ilustração automática. */
export function coverOf(project: Project): string {
  if (project.cover) return resolveAsset(project.cover)
  return placeholderImage({ seed: project.slug, note: project.example ? 'exemplo' : '' })
}

export interface ProjectFilters {
  query: string
  category: string
  year: string
  material: string
}

export const EMPTY_FILTERS: ProjectFilters = { query: '', category: '', year: '', material: '' }

function searchable(p: Project): string {
  return normalize([p.title, p.summary, p.description, p.category, ...p.authors, ...(p.keywords ?? [])].join(' '))
}

/** Busca por nome, descrição, categoria, estudantes e palavras-chave (sem diferenciar acentos). */
export function filterProjects(projects: Project[], filters: ProjectFilters): Project[] {
  const terms = normalize(filters.query).split(/\s+/).filter(Boolean)
  return projects.filter((p) => {
    if (filters.category && p.category !== filters.category) return false
    if (filters.year && String(p.year) !== filters.year) return false
    if (filters.material && !materialsOf(p).includes(filters.material as MaterialType)) return false
    if (terms.length === 0) return true
    const haystack = searchable(p)
    return terms.every((t) => haystack.includes(t))
  })
}
