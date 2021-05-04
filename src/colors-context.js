import * as React from 'react'

export const colors = {
  default: {
    foreground: '#F6FEFE',
    background: '#B95FE3',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

export const ThemeContext = React.createContext(
  colors.default, // default value
)
