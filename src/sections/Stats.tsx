import { useEffect, useMemo, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { gallery } from '@/data/gallery'
import { projects } from '@/data/projects'

/** Conta de 0 até `value` quando entra na tela (sem animação se o usuário prefere menos movimento). */
function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setDisplay(value)
      return
    }
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 900, 1)
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{display}</span>
}

/** Números calculados automaticamente a partir dos projetos e da galeria. Itens zerados não aparecem. */
export function Stats() {
  const items = useMemo(() => {
    const authors = new Set(projects.flatMap((p) => p.authors))
    const videos = projects.reduce((sum, p) => sum + (p.videos?.length ?? 0), 0)
    const posters = projects.reduce((sum, p) => sum + (p.links?.filter((l) => l.type === 'poster').length ?? 0), 0)
    return [
      { label: 'Projetos', value: projects.length },
      { label: 'Estudantes', value: authors.size },
      { label: 'Vídeos', value: videos },
      { label: 'Pôsteres', value: posters },
      { label: 'Fotos', value: gallery.length },
    ].filter((item) => item.value > 0)
  }, [])

  if (items.length === 0) return null

  return (
    <section className="border-y border-line bg-surface-2 py-14" aria-label="Números do projeto">
      <Container>
        <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]">
          {items.map((item) => (
            <div key={item.label} className="rounded-2xl border border-line bg-surface p-5 text-center shadow-card">
              <dd className="font-display text-4xl font-semibold text-brand sm:text-5xl">
                <CountUp value={item.value} />
              </dd>
              <dt className="mt-1 text-sm font-medium text-muted">{item.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
