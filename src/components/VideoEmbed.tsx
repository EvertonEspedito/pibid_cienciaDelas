import { useState } from 'react'
import { parseVideoUrl } from '@/utils/video'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'

interface VideoEmbedProps {
  title: string
  url: string
  /** Projeto de exemplo: não tenta carregar o vídeo. */
  example?: boolean
}

/**
 * Vídeo incorporado sob demanda: o iframe só carrega quando a pessoa clica em "Assistir",
 * então a página não baixa vídeos pesados de uma vez.
 */
export function VideoEmbed({ title, url, example }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const source = parseVideoUrl(url)

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1650] to-[#4c2a85]">
      {playing && source.embedUrl ? (
        <iframe
          src={source.embedUrl}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-white">
          <Icon name="video" size={40} className="opacity-80" />
          <p className="font-display text-lg font-semibold">{title}</p>
          {example ? (
            <p className="max-w-xs text-sm text-white/80">Vídeo de exemplo. Cole o link do YouTube ou do Google Drive em `videos` do projeto.</p>
          ) : source.embedUrl ? (
            <Button variant="secondary" onClick={() => setPlaying(true)}>
              Assistir ao vídeo
            </Button>
          ) : (
            <Button variant="secondary" href={url} target="_blank" rel="noopener noreferrer">
              Abrir vídeo <Icon name="external" size={16} />
              <span className="sr-only">(abre em nova aba)</span>
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
