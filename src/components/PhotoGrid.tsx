import { useMemo, useState } from 'react'
import { resolveAsset } from '@/utils/assets'
import { Lightbox, type LightboxItem } from './ui/Lightbox'

export interface Photo {
  src: string
  title: string
  description?: string
  /** Linha extra na legenda (ex.: atividade e data). */
  meta?: string
}

interface PhotoGridProps {
  photos: Photo[]
  columns?: 2 | 3 | 4
  /** Complemento do texto alternativo (ex.: nome do projeto). */
  context?: string
}

const columnClass = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
}

/** Grade responsiva de fotos com visualização em tela cheia (lightbox). Carrega sob demanda. */
export function PhotoGrid({ photos, columns = 3, context }: PhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items: LightboxItem[] = useMemo(
    () =>
      photos.map((p) => ({
        src: resolveAsset(p.src),
        alt: context ? `${p.title} — ${context}` : p.title,
        title: p.title,
        caption: p.description,
        meta: p.meta,
      })),
    [photos, context],
  )

  if (photos.length === 0) return null

  return (
    <>
      <ul className={`grid grid-cols-2 gap-3 sm:gap-4 ${columnClass[columns]}`}>
        {photos.map((photo, index) => (
          <li key={`${photo.src}-${index}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar imagem: ${photo.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-soft"
            >
              <img
                src={items[index].src}
                alt={items[index].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(18_12_32/0.85)] to-transparent p-3 text-left text-sm font-medium text-white sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                {photo.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={openIndex} onChange={setOpenIndex} />
    </>
  )
}
