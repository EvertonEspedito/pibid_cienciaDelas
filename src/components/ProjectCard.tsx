import type { Project } from '@/data/types'
import { coverOf } from '@/utils/projects'
import { joinList } from '@/utils/text'
import { CategoryBadge } from './ui/CategoryBadge'
import { Icon } from './ui/Icon'

interface ProjectCardProps {
  project: Project
  onOpen: (slug: string) => void
  /** `large` é usado na seção Exposição (imagem mais alta). */
  size?: 'default' | 'large'
}

function authorsLabel(names: string[]): string {
  if (names.length === 0) return ''
  if (names.length <= 3) return joinList(names)
  return `${joinList(names.slice(0, 2))} e mais ${names.length - 2}`
}

/**
 * Card de projeto. O título é um botão "esticado" (after:absolute) que torna o card inteiro
 * clicável sem aninhar elementos interativos — bom para teclado e leitores de tela.
 */
export function ProjectCard({ project, onOpen, size = 'default' }: ProjectCardProps) {
  const aspect = size === 'large' ? 'aspect-[4/5]' : 'aspect-[4/3]'
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-within:shadow-lift">
      <div className={`${aspect} overflow-hidden bg-brand-soft`}>
        <img
          src={coverOf(project)}
          alt={`Capa do projeto ${project.title}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <CategoryBadge name={project.category} />
          <span className="flex items-center gap-1 text-sm text-muted">
            <Icon name="calendar" size={16} />
            <span className="sr-only">Ano:</span>
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug">
          <button
            type="button"
            onClick={() => onOpen(project.slug)}
            className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </button>
        </h3>

        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        {project.authors.length > 0 && (
          <p className="mt-auto flex items-start gap-2 pt-2 text-sm text-muted">
            <Icon name="users" size={16} className="mt-0.5 shrink-0" />
            <span>
              <span className="sr-only">Autoras e autores: </span>
              {authorsLabel(project.authors)}
            </span>
          </p>
        )}

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand" aria-hidden="true">
          Ver projeto
          <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}
