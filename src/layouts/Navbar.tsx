import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Logo } from './Logo'
import { NAV_ITEMS } from './navigation'
import { ThemeToggle } from './ThemeToggle'

/** Descobre qual seção está na tela para destacar o item do menu. */
function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0 || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])
  return active
}

const linkClass = (active: boolean) =>
  `inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${
    active ? 'bg-brand-soft text-brand' : 'text-ink hover:bg-surface-2 hover:text-brand'
  }`

const IDS = NAV_ITEMS.map((i) => i.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined} className={linkClass(active === item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink hover:border-brand hover:text-brand lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Principal (celular)" className="border-t border-line bg-bg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className={linkClass(active === item.id)}>
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
