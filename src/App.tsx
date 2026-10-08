import { useCallback, useEffect, useState } from 'react'
import { ProjectModal } from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import { Footer } from '@/layouts/Footer'
import { Navbar } from '@/layouts/Navbar'
import { About } from '@/sections/About'
import { Featured } from '@/sections/Featured'
import { Gallery } from '@/sections/Gallery'
import { Hero } from '@/sections/Hero'
import { Journey } from '@/sections/Journey'
import { Projects } from '@/sections/Projects'
import { Stats } from '@/sections/Stats'

const HASH_PREFIX = '#projeto/'

/** Lê o projeto do endereço (#projeto/slug), para que cada projeto tenha um link compartilhável. */
function slugFromHash(): string | null {
  const { hash } = window.location
  if (!hash.startsWith(HASH_PREFIX)) return null
  const slug = decodeURIComponent(hash.slice(HASH_PREFIX.length))
  return projects.some((p) => p.slug === slug) ? slug : null
}

export default function App() {
  const [openSlug, setOpenSlug] = useState<string | null>(slugFromHash)

  useEffect(() => {
    const onHashChange = () => setOpenSlug(slugFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const open = useCallback((slug: string) => {
    window.location.hash = `${HASH_PREFIX}${slug}`
    setOpenSlug(slug)
  }, [])

  const close = useCallback(() => {
    // Remove o #projeto/... sem mudar a posição da página.
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
    setOpenSlug(null)
  }, [])

  const hasExamples = projects.some((p) => p.example)
  const current = projects.find((p) => p.slug === openSlug) ?? null

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      {hasExamples && (
        <div role="note" className="bg-accent-soft px-4 py-2 text-center text-sm font-medium text-accent">
          Versão de demonstração: os projetos, nomes e imagens exibidos são <strong>exemplos fictícios</strong> e serão substituídos pelo acervo real.
        </div>
      )}
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Stats />
        <Featured onOpen={open} />
        <Projects onOpen={open} />
        <Journey />
        <Gallery />
      </main>
      <Footer />
      <ProjectModal project={current} onClose={close} />
    </>
  )
}
