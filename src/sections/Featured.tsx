import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { Container } from '@/components/ui/Container'
import { AtomMotif } from '@/components/ui/ScienceMotifs'
import { projects } from '@/data/projects'

/** "Exposição digital": projetos marcados com `featured: true`, em cartões grandes sobre fundo escuro. */
export function Featured({ onOpen }: { onOpen: (slug: string) => void }) {
  const featured = projects.filter((p) => p.featured)
  if (featured.length === 0) return null

  return (
    <section id="exposicao" className="relative scroll-mt-16 overflow-hidden bg-[#1d1038] py-16 text-white sm:py-24" aria-labelledby="exposicao-titulo">
      <AtomMotif className="pointer-events-none absolute -right-24 -top-16 w-[28rem] animate-orbit-slow opacity-25" />
      <Container className="relative">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff8fa3]">Exposição digital</p>
          <h2 id="exposicao-titulo" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Em destaque na exposição
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">Alguns dos trabalhos que as estudantes mais gostaram de apresentar. Clique para ver fotos, vídeos e materiais.</p>
        </Reveal>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={i * 80}>
              <ProjectCard project={project} onOpen={onOpen} size="large" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
