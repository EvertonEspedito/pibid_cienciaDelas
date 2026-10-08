import { site } from '@/data/site'
import { Container } from '@/components/ui/Container'
import { CircuitMotif } from '@/components/ui/ScienceMotifs'
import { Logo } from './Logo'
import { NAV_ITEMS } from './navigation'

export function Footer() {
  return (
    <footer id="contato" className="relative scroll-mt-16 overflow-hidden border-t border-line bg-surface-2">
      <CircuitMotif className="pointer-events-none absolute bottom-16 right-0 hidden w-72 opacity-40 md:block" />
      <Container className="relative grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm leading-relaxed text-muted">{site.tagline} Um acervo digital das produções dos estudantes na intervenção do PIBID.</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">Navegue</h2>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.filter((i) => i.id !== 'contato').map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="inline-flex min-h-8 items-center hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">Instituição e contato</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>{site.school}</li>
            <li>{site.university}</li>
            <li>Coordenação: {site.coordinator}</li>
            <li>{site.contactEmail}</li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-line">
        <Container className="py-5 text-sm text-muted">
          <p>© {new Date().getFullYear()} Ciência Delas · PIBID. Imagens e nomes de estudantes são publicados somente com autorização.</p>
        </Container>
      </div>
    </footer>
  )
}
