import { useMemo, useState } from 'react'
import { PhotoGrid } from '@/components/PhotoGrid'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { gallery } from '@/data/gallery'
import { formatDate } from '@/utils/format'

const chip = (active: boolean) =>
  `min-h-10 rounded-full border px-4 text-sm font-medium transition-colors ${
    active ? 'border-brand bg-brand text-on-brand' : 'border-line bg-surface text-ink hover:border-brand hover:text-brand'
  }`

/** Galeria de fotos das atividades, com filtro por atividade e lightbox. Edite src/data/gallery.ts. */
export function Gallery() {
  const [activity, setActivity] = useState('')
  const activities = useMemo(() => [...new Set(gallery.map((p) => p.activity).filter((a): a is string => Boolean(a)))], [])
  const photos = useMemo(() => gallery.filter((p) => !activity || p.activity === activity), [activity])

  if (gallery.length === 0) return null

  return (
    <section id="galeria" className="scroll-mt-16 py-16 sm:py-24" aria-labelledby="galeria-titulo">
      <Container>
        <SectionTitle eyebrow="Registros" title="Galeria de fotos" description="Momentos das atividades. Clique em uma foto para vê-la em tela cheia, com legenda e data." />

        {activities.length > 1 && (
          <fieldset className="mt-8">
            <legend className="mb-3 text-sm font-semibold text-muted">Atividade</legend>
            <div className="flex flex-wrap gap-2">
              <button type="button" aria-pressed={activity === ''} className={chip(activity === '')} onClick={() => setActivity('')}>
                Todas
              </button>
              {activities.map((name) => (
                <button key={name} type="button" aria-pressed={activity === name} className={chip(activity === name)} onClick={() => setActivity(activity === name ? '' : name)}>
                  {name}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        <div className="mt-8">
          <PhotoGrid
            columns={4}
            photos={photos.map((p) => ({
              src: p.src,
              title: p.title,
              description: p.description,
              meta: [p.activity, p.date ? formatDate(p.date) : ''].filter(Boolean).join(' · '),
            }))}
          />
        </div>
        <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">
          {photos.length} {photos.length === 1 ? 'foto' : 'fotos'}. Fotos são publicadas somente com autorização.
        </p>
      </Container>
    </section>
  )
}
