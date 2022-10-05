import { useContext } from 'react'
import { ToggleThemeContext } from 'resources/contexts/toggle-theme'

function useToggleTheme () {
  const context = useContext(ToggleThemeContext)

  if (!context) {
    throw new Error('You must wrap your app with <ToggleThemeProvider /> component')
  }

  return context
}

export { useToggleTheme }
