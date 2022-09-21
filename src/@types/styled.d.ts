import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      separator: string,
      text: string,
      primary: string,

      sidebar: {
        black: string
        lightBlack: string
        white: string
        gray: string
        primary: string
        primaryDark: string
      }
    }
  }
}
