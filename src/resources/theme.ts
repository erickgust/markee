import { DefaultTheme } from 'styled-components'

const common = {
  primary: '#1FC8E1',
  white: '#FAFAFA',
  black: '#1E293B',
  lightBlack: '#293445',
  gray: '#E4E5E7',
}

export const theme: DefaultTheme = {
  colors: {
    ...common,
    primaryDark: '#18A1B5',
  },

  light: {
    background: common.white,
    separator: common.gray,
    text: common.black,
    primary: common.primary,
  },

  dark: {
    background: '#1C2535',
    separator: common.lightBlack,
    text: common.white,
    primary: common.primary,
  },
}
