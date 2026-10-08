import { useTheme } from '@/hooks/useTheme'
import { Icon } from '@/components/ui/Icon'

/** Alterna entre tema claro e escuro (preferência salva no navegador). */
export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand"
    >
      <Icon name={dark ? 'sun' : 'moon'} />
    </button>
  )
}
