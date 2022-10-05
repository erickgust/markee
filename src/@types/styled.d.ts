import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string,
    separator: string,
    text: string,
    primary: string,

    staticColors: {
      black: string
      lightBlack: string
      white: string
      gray: string
      primary: string
      primaryDark: string
    }
  }
}
