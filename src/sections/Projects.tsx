import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { SearchBar } from '@/components/SearchBar'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { projects } from '@/data/projects'
import { EMPTY_FILTERS, MATERIAL_LABELS, MATERIAL_ORDER, filterProjects, materialsOf, type ProjectFilters } from '@/utils/projects'

const PAGE_SIZE = 6
const selectClass = 'min-h-11 w-full rounded-xl border border-line bg-surface px-3 text-sm text-ink focus:border-brand'

const chip = (active: boolean) =>
  `min-h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
    active ? 'border-brand bg-brand text-on-brand' : 'border-line bg-surface text-ink hover:border-brand hover:text-brand'
  }`

export function Projects({ onOpen }: { onOpen: (slug: string) => void }) {
  const [filters, setFilters] = useState<ProjectFilters>(EMPTY_FILTERS)
  const [limit, setLimit] = useState(PAGE_SIZE)

  const update = (patch: Partial<ProjectFilters>) => {
    setFilters((f) => ({ ...f, ...patch }))
    setLimit(PAGE_SIZE)
  }

  // Opções dos filtros vêm dos próprios projetos: categoria/ano novos aparecem sozinhos.
  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    projects.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1))
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], 'pt-BR'))
  }, [])
  const years = useMemo(() => [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a), [])
  const materials = useMemo(() => MATERIAL_ORDER.filter((t) => projects.some((p) => materialsOf(p).includes(t))), [])

  const filtered = useMemo(() => filterProjects(projects, filters), [filters])
  const shown = filtered.slice(0, limit)
  const hasFilters = Object.values(filters).some(Boolean)

  if (projects.length === 0) {
    return (
      <section id="projetos" className="scroll-mt-16 py-16 sm:py-24">
        <Container>
          <SectionTitle eyebrow="Acervo" title="Explore os projetos" description="Os projetos serão publicados aqui em breve." />
        </Container>
      </section>
    )
  }

  return (
    <section id="projetos" className="scroll-mt-16 py-16 sm:py-24" aria-labelledby="projetos-titulo">
      <Container>
        <SectionTitle
          eyebrow="Acervo"
          title="Explore os projetos"
          description="Pesquise por nome, descrição, categoria, estudantes ou palavras-chave, e filtre por categoria, ano e tipo de material."
        />

        <div className="mt-8 max-w-xl">
          <SearchBar value={filters.query} onChange={(query) => update({ query })} />
        </div>

        <div className="mt-8 space-y-5">
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-muted">Categoria</legend>
            <div className="flex flex-wrap gap-2">
              <button type="button" aria-pressed={filters.category === ''} className={chip(filters.category === '')} onClick={() => update({ category: '' })}>
                Todas
              </button>
              {categories.map(([name, count]) => {
                const active = filters.category === name
                return (
                  <button key={name} type="button" aria-pressed={active} className={chip(active)} onClick={() => update({ category: active ? '' : name })}>
                    {name} <span className="opacity-70">({count})</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
            <div>
              <label htmlFor="filtro-ano" className="mb-2 block text-sm font-semibold text-muted">
                Ano
              </label>
              <select id="filtro-ano" className={selectClass} value={filters.year} onChange={(e) => update({ year: e.target.value })}>
                <option value="">Todos os anos</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="filtro-material" className="mb-2 block text-sm font-semibold text-muted">
                Tipo de material
              </label>
              <select id="filtro-material" className={selectClass} value={filters.material} onChange={(e) => update({ material: e.target.value })}>
                <option value="">Todos os tipos</option>
                {materials.map((t) => (
                  <option key={t} value={t}>
                    {MATERIAL_LABELS[t]}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-1">
              <p className="text-sm text-muted" role="status" aria-live="polite">
                {filtered.length} {filtered.length === 1 ? 'projeto' : 'projetos'}
              </p>
              {hasFilters && (
                <Button variant="ghost" onClick={() => update(EMPTY_FILTERS)}>
                  Limpar
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-surface p-10 text-center" role="status">
              <Icon name="flask" size={36} className="mx-auto text-brand" />
              <p className="mt-4 font-display text-xl font-semibold">Nenhum projeto encontrado</p>
              <p className="mt-2 text-muted">Tente outra palavra ou remova alguns filtros.</p>
              <Button variant="secondary" className="mt-6" onClick={() => update(EMPTY_FILTERS)}>
                Limpar filtros
              </Button>
            </div>
          ) : (
            <>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((project) => (
                  <li key={project.slug}>
                    <ProjectCard project={project} onOpen={onOpen} />
                  </li>
                ))}
              </ul>
              {limit < filtered.length && (
                <div className="mt-10 text-center">
                  <Button variant="secondary" size="lg" onClick={() => setLimit((l) => l + PAGE_SIZE)}>
                    Carregar mais projetos
                  </Button>
                  <p className="mt-3 text-sm text-muted" aria-live="polite">
                    Mostrando {shown.length} de {filtered.length}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
