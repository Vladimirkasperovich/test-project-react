import { createContext } from 'react'

export type ThemeType = 'light' | 'dark'

interface ThemeContextProps {
  theme: ThemeType
  changeTheme: (newTheme: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  changeTheme: () => {
    console.warn('changeTheme called outside of ThemeProvider')
  },
})
