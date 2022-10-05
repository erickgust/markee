import localforage from 'localforage'
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { themes } from 'resources/theme/theme'
import { ThemeProvider } from 'styled-components'

type Theme = 'light' | 'dark'

type ToggleThemeContextType = {
  theme: Theme
  handleToggleTheme: () => void
}

export const ToggleThemeContext = createContext<ToggleThemeContextType | null>(null)

type ToggleThemeProviderProps = {
  children: ReactNode | ReactNode[]
}

export function ToggleThemeProvider ({ children }: ToggleThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    localforage.getItem<Theme>('theme').then(storedTheme => {
      setTheme(storedTheme ?? 'light')
    })
  }, [])

  useEffect(() => {
    localforage.setItem('theme', theme)
  }, [theme])

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light
  }, [theme])

  function handleToggleTheme () {
    setTheme(theme => theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ToggleThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  )
}
