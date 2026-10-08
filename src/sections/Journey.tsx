import { Reveal } from '@/components/Reveal'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { timeline } from '@/data/timeline'
import { formatDate } from '@/utils/format'
import { resolveAsset } from '@/utils/assets'

/** "Nossa jornada": linha do tempo vertical. Para mudar, edite src/data/timeline.ts. */
export function Journey() {
  const events = [...timeline].sort((a, b) => a.date.localeCompare(b.date))
  if (events.length === 0) return null

  return (
    <section id="jornada" className="scroll-mt-16 border-t border-line bg-surface-2 py-16 sm:py-24" aria-labelledby="jornada-titulo">
      <Container>
        <SectionTitle eyebrow="Linha do tempo" title="Nossa jornada" description="Os marcos da intervenção, do primeiro encontro à exposição dos trabalhos." />

        <ol className="relative mt-14 space-y-12 before:absolute before:bottom-0 before:left-4 before:top-2 before:w-px before:bg-line md:before:left-1/2">
          {events.map((event, index) => {
            const left = index % 2 === 0
            return (
              <Reveal as="li" key={`${event.date}-${event.title}`} className="relative grid gap-4 pl-12 md:grid-cols-2 md:gap-14 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border-4 border-surface-2 bg-brand text-xs font-bold text-on-brand md:left-1/2 md:-translate-x-1/2"
                >
                  {index + 1}
                </span>
                <div className={left ? 'md:text-right' : 'md:order-2'}>
                  <time dateTime={event.date} className="eyebrow">
                    {formatDate(event.date)}
                  </time>
                  <h3 className="mt-2 text-2xl font-semibold">{event.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{event.description}</p>
                </div>
                <div className={left ? '' : 'md:order-1'}>
                  {event.image && (
                    <img
                      src={resolveAsset(event.image)}
                      alt={`Imagem do marco: ${event.title}`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/9] w-full rounded-2xl object-cover shadow-card"
                    />
                  )}
                </div>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
