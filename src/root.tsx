import { ToggleThemeProvider } from 'resources/contexts/toggle-theme'
import { createGlobalStyle } from 'styled-components'
import { App } from './app'

import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }
`

function Root () {
  return (
    <ToggleThemeProvider>
      <GlobalStyle />
      <App />
    </ToggleThemeProvider>
  )
}

export { Root }
