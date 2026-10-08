import { useId } from 'react'
import { Icon } from './ui/Icon'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
}

/** Campo de pesquisa com label acessível (visualmente oculto) e botão de limpar. */
export function SearchBar({ value, onChange, placeholder = 'Pesquisar projetos...', label = 'Pesquisar projetos' }: SearchBarProps) {
  const id = useId()
  return (
    <div role="search" className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-13 min-h-[3.25rem] w-full rounded-full border border-line bg-surface pl-12 pr-12 text-base text-ink shadow-card placeholder:text-muted focus:border-brand [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Limpar pesquisa"
          className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-muted hover:text-accent"
        >
          <Icon name="close" size={18} />
        </button>
      )}
    </div>
  )
}
