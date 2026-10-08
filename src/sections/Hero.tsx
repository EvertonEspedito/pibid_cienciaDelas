import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { site } from '@/data/site'
import { projects } from '@/data/projects'

/** Composição científica discreta: órbitas girando suavemente + cartões flutuantes. */
function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-6 rounded-full bg-brand-soft/70" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-orbit">
        <g fill="none" stroke="rgb(var(--brand))" strokeWidth="2" opacity="0.6">
          <ellipse cx="200" cy="200" rx="180" ry="66" transform="rotate(-30 200 200)" />
          <ellipse cx="200" cy="200" rx="180" ry="66" transform="rotate(30 200 200)" />
          <ellipse cx="200" cy="200" rx="180" ry="66" transform="rotate(90 200 200)" />
        </g>
        <circle cx="360" cy="125" r="10" fill="rgb(var(--mint))" />
        <circle cx="48" cy="278" r="10" fill="rgb(var(--accent))" />
        <circle cx="200" cy="18" r="10" fill="rgb(var(--brand))" />
      </svg>
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-orbit-slow">
        <circle cx="200" cy="200" r="130" fill="none" stroke="rgb(var(--line))" strokeWidth="2" strokeDasharray="4 10" />
        <circle cx="330" cy="200" r="7" fill="rgb(var(--accent))" />
      </svg>
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-float place-items-center rounded-full bg-accent shadow-lift">
        <Icon name="spark" size={40} className="text-white" />
      </div>
      <div className="absolute -left-1 top-10 animate-float rounded-2xl border border-line bg-surface px-4 py-3 shadow-card" style={{ animationDelay: '-2s' }}>
        <p className="font-display text-lg font-semibold text-brand">H₂O</p>
        <p className="text-xs text-muted">Experimentos</p>
      </div>
      <div className="absolute -right-1 bottom-14 animate-float rounded-2xl border border-line bg-surface px-4 py-3 shadow-card" style={{ animationDelay: '-4s' }}>
        <p className="font-display text-lg font-semibold text-accent">{'{ code }'}</p>
        <p className="text-xs text-muted">Programação</p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <p className="eyebrow mb-4">Exposição digital · PIBID</p>
          <h1 id="hero-title" className="text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Ciência <span className="text-accent">Delas</span>
          </h1>
          <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">{site.tagline}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{site.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {projects.length > 0 && (
              <Button href="#projetos" size="lg">
                Explorar projetos <Icon name="arrow" size={18} />
              </Button>
            )}
            <Button href="#sobre" variant="secondary" size="lg">
              Conheça o projeto
            </Button>
          </div>
        </div>
        <HeroArt />
      </Container>
    </section>
  )
}
