import { useCallback, useEffect } from 'react'
import { Icon } from './Icon'
import { Modal } from './Modal'

export interface LightboxItem {
  src: string
  alt: string
  title: string
  caption?: string
  meta?: string
}

interface LightboxProps {
  items: LightboxItem[]
  /** Índice da imagem aberta; `null` fecha o lightbox. */
  index: number | null
  onChange: (index: number | null) => void
}

/** Visualização em tela cheia com legenda, data e navegação por teclado (← → Esc). */
export function Lightbox({ items, index, onChange }: LightboxProps) {
  const open = index !== null
  const close = useCallback(() => onChange(null), [onChange])
  const go = useCallback(
    (step: number) => {
      if (index === null) return
      onChange((index + step + items.length) % items.length)
    },
    [index, items.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, go])

  const item = index !== null ? items[index] : null

  return (
    <Modal open={open} onClose={close} label={item ? `Imagem: ${item.title}` : 'Imagem'} className="max-w-5xl">
      {item && (
        <figure>
          <div className="grid place-items-center bg-[rgb(18_12_32)]">
            <img src={item.src} alt={item.alt} className="max-h-[70vh] w-full object-contain" />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <p className="font-display text-xl font-semibold">{item.title}</p>
              {item.caption && <p className="mt-1 text-muted">{item.caption}</p>}
              {item.meta && <p className="mt-1 text-sm font-medium text-accent">{item.meta}</p>}
            </div>
            {items.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Imagem anterior"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-brand hover:text-brand"
                >
                  <Icon name="chevron-left" />
                </button>
                <span className="min-w-12 text-center text-sm text-muted" aria-live="polite">
                  {(index ?? 0) + 1} / {items.length}
                </span>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Próxima imagem"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-brand hover:text-brand"
                >
                  <Icon name="chevron" />
                </button>
              </div>
            )}
          </figcaption>
        </figure>
      )}
    </Modal>
  )
}
