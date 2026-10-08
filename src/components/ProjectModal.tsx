import { useState } from 'react'
import type { Project, ProjectLink } from '@/data/types'
import { MATERIAL_LABELS, coverOf } from '@/utils/projects'
import { PhotoGrid } from './PhotoGrid'
import { VideoEmbed } from './VideoEmbed'
import { Button } from './ui/Button'
import { CategoryBadge } from './ui/CategoryBadge'
import { Icon, type IconName } from './ui/Icon'
import { Modal } from './ui/Modal'

const LINK_ICONS: Record<ProjectLink['type'], IconName> = {
  poster: 'poster',
  slide: 'slides',
  pdf: 'file',
  site: 'globe',
  documento: 'file',
  outro: 'external',
}

function TextBlock({ title, text }: { title: string; text?: string }) {
  if (!text) return null
  return (
    <section>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{text}</p>
    </section>
  )
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/** Janela com todos os detalhes do projeto. O endereço da página guarda o projeto aberto (#projeto/slug). */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* sem permissão da área de transferência: o link continua na barra de endereço */
    }
  }

  const sites = project?.links?.filter((l) => l.type === 'site') ?? []
  const materials = project?.links?.filter((l) => l.type !== 'site') ?? []

  return (
    <Modal open={project !== null} onClose={onClose} label={project ? `Projeto: ${project.title}` : 'Projeto'} className="max-w-4xl">
      {project && (
        <article>
          <img src={coverOf(project)} alt={`Capa do projeto ${project.title}`} className="aspect-[16/7] w-full object-cover" />

          <div className="space-y-8 p-6 sm:p-10">
            <header>
              <div className="flex flex-wrap items-center gap-3">
                <CategoryBadge name={project.category} />
                <span className="flex items-center gap-1 text-sm text-muted">
                  <Icon name="calendar" size={16} />
                  <span className="sr-only">Ano:</span> {project.year}
                </span>
                {project.example && <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">Exemplo</span>}
              </div>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{project.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {sites.map((site) => (
                  <Button key={site.url + site.label} href={site.url} target="_blank" rel="noopener noreferrer" size="lg">
                    {site.label || 'Visitar projeto'} <Icon name="external" size={18} />
                    <span className="sr-only">(abre em nova aba)</span>
                  </Button>
                ))}
                <Button variant="secondary" size="lg" onClick={copyLink}>
                  {copied ? 'Link copiado!' : 'Copiar link do projeto'}
                </Button>
              </div>
            </header>

            <dl className="grid gap-5 rounded-2xl border border-line bg-surface-2 p-5 sm:grid-cols-2">
              {project.authors.length > 0 && (
                <div>
                  <dt className="text-sm font-semibold text-muted">Autoras e autores</dt>
                  <dd className="mt-1">{project.authors.join(', ')}</dd>
                </div>
              )}
              {project.advisors && project.advisors.length > 0 && (
                <div>
                  <dt className="text-sm font-semibold text-muted">Orientação</dt>
                  <dd className="mt-1">{project.advisors.join(', ')}</dd>
                </div>
              )}
              {project.school && (
                <div>
                  <dt className="text-sm font-semibold text-muted">Escola</dt>
                  <dd className="mt-1">{project.school}</dd>
                </div>
              )}
              <div>
                <dt className="text-sm font-semibold text-muted">Categoria · Ano</dt>
                <dd className="mt-1">
                  {project.category} · {project.year}
                </dd>
              </div>
            </dl>

            <TextBlock title="Descrição" text={project.description} />
            <TextBlock title="Objetivo" text={project.objective} />
            <TextBlock title="Desenvolvimento" text={project.development} />
            <TextBlock title="Resultados" text={project.results} />

            {project.videos && project.videos.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold">{project.videos.length > 1 ? 'Vídeos' : 'Vídeo'}</h3>
                <div className="mt-3 space-y-4">
                  {project.videos.map((video) => (
                    <VideoEmbed key={video.url + video.title} title={video.title} url={video.url} example={project.example} />
                  ))}
                </div>
              </section>
            )}

            {project.images && project.images.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold">Galeria</h3>
                <div className="mt-3">
                  <PhotoGrid
                    columns={3}
                    context={project.title}
                    photos={project.images.map((img, i) => ({ src: img.src, title: img.caption ?? `Imagem ${i + 1}`, description: img.caption }))}
                  />
                </div>
              </section>
            )}

            {materials.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold">Materiais</h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {materials.map((link) => (
                    <li key={link.url + link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                          <Icon name={LINK_ICONS[link.type]} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-medium">{link.label}</span>
                          <span className="text-sm text-muted">
                            {MATERIAL_LABELS[link.type]}
                            <span className="sr-only"> (abre em nova aba)</span>
                          </span>
                        </span>
                        <Icon name="external" size={18} className="text-muted group-hover:text-brand" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      )}
    </Modal>
  )
}
