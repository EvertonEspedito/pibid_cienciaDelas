import { Reveal } from '@/components/Reveal'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { MoleculeMotif } from '@/components/ui/ScienceMotifs'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { site } from '@/data/site'

export function About() {
  const { about } = site
  return (
    <section id="sobre" className="relative scroll-mt-16 py-16 sm:py-24" aria-labelledby="sobre-titulo">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionTitle eyebrow="O projeto" title={about.title} description={about.intro} />
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {about.pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 90} className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                <Icon name={pillar.icon} size={24} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>

      <Container className="relative mt-12 sm:mt-16">
        <MoleculeMotif className="pointer-events-none absolute -top-24 right-4 hidden w-40 opacity-60 lg:block" />
        <div className="grid gap-5 md:grid-cols-2">
          {about.blocks.map((block, i) => (
            <Reveal as="article" key={block.title} delay={(i % 2) * 90} className="rounded-2xl border border-line bg-surface-2 p-6 sm:p-8">
              <h3 className="text-xl font-semibold">{block.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
