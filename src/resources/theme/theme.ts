import { DefaultTheme } from 'styled-components'

const colors = {
  gray: '#E4E5E7',
  white: '#FAFAFA',
  black: '#1E293B',
  lightBlack: '#293445',
  primary: '#1FC8E1',
  primaryDark: '#18A1B5',
}

const light: DefaultTheme = {
  background: colors.white,
  separator: colors.gray,
  text: colors.black,
  primary: colors.primary,

  staticColors: colors,
}

const dark: DefaultTheme = {
  background: '#1C2535',
  separator: colors.lightBlack,
  text: colors.white,
  primary: colors.primary,

  staticColors: colors,
}

export const themes = { dark, light }
