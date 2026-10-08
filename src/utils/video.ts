export interface VideoSource {
  provider: 'youtube' | 'drive' | 'vimeo' | 'external'
  embedUrl: string | null
}

/** Converte links de vídeo em URL de incorporação (iframe) quando possível. */
export function parseVideoUrl(url: string): VideoSource {
  try {
    const u = new URL(url)
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      return { provider: 'youtube', embedUrl: `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}` }
    }
    if (host.endsWith('youtube.com')) {
      const id = u.searchParams.get('v') ?? u.pathname.split('/').pop()
      return { provider: 'youtube', embedUrl: id ? `https://www.youtube-nocookie.com/embed/${id}` : null }
    }
    if (host === 'drive.google.com') {
      const match = u.pathname.match(/\/file\/d\/([^/]+)/)
      return { provider: 'drive', embedUrl: match ? `https://drive.google.com/file/d/${match[1]}/preview` : null }
    }
    if (host === 'vimeo.com') {
      return { provider: 'vimeo', embedUrl: `https://player.vimeo.com/video/${u.pathname.slice(1)}` }
    }
  } catch {
    /* URL inválida: cai no link externo */
  }
  return { provider: 'external', embedUrl: null }
}
