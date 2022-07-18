import { ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'
import { App } from './app'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export { Root }
