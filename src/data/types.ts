/** Tipos dos dados do site. Você normalmente NÃO precisa mexer aqui — edite os outros arquivos de `src/data/`. */

/** Tipo de um link de material. */
export type LinkType = 'poster' | 'slide' | 'pdf' | 'site' | 'documento' | 'outro'

/** Tipo de material (usado no filtro "Tipo de material"). */
export type MaterialType = LinkType | 'video' | 'imagem'

export interface ProjectLink {
  type: LinkType
  /** Texto do botão. Ex.: "Pôster em PDF". */
  label: string
  /** Endereço do material (Drive, site, PDF em `public/`, etc.). */
  url: string
}

export interface ProjectImage {
  /** Caminho em `public/` (ex.: "projetos/horta/foto1.jpg") ou URL completa. */
  src: string
  caption?: string
}

export interface ProjectVideo {
  title: string
  /** Link do YouTube ou Google Drive. Vídeos pesados NÃO devem ficar no site. */
  url: string
}

export interface Project {
  /** Identificador curto, sem espaços/acentos. Usado no link: site.com/#projeto/energia-solar */
  slug: string
  title: string
  /** Frase curta que aparece no cartão. */
  summary: string
  /** Texto completo do projeto. */
  description: string
  category: string
  year: number
  /** Nomes como devem aparecer publicamente (ex.: "Maria S." — conforme a autorização da escola). */
  authors: string[]
  advisors?: string[]
  school?: string
  objective?: string
  development?: string
  results?: string
  /** Imagem de capa (caminho em `public/` ou URL). Sem capa, o site gera uma ilustração automática. */
  cover?: string
  images?: ProjectImage[]
  videos?: ProjectVideo[]
  links?: ProjectLink[]
  /** Palavras extras para a busca. */
  keywords?: string[]
  /** `true` = aparece na seção "Exposição" (destaques). */
  featured?: boolean
  /** Marca o projeto como EXEMPLO (mostra o aviso de demonstração). Apague ao colocar os reais. */
  example?: boolean
}

export interface TimelineEvent {
  /** "2026", "2026-03" ou "2026-03-15". */
  date: string
  title: string
  description: string
  image?: string
}

export interface GalleryPhoto {
  src: string
  title: string
  description?: string
  /** "2026", "2026-03" ou "2026-03-15". */
  date?: string
  /** Atividade relacionada (vira um filtro). Ex.: "Oficina de programação". */
  activity?: string
}
