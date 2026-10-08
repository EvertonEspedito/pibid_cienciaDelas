import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
const STORAGE_KEY = 'cd-theme'

function readInitial(): Theme {
  if (document.documentElement.classList.contains('dark')) return 'dark'
  return 'light'
}

/** Tema claro/escuro com preferência salva em localStorage (o script em index.html evita "flash"). */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* armazenamento indisponível: ignora */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
