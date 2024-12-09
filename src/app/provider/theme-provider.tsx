import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ThemeContext, ThemeType } from '../context'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const savedTheme = localStorage.getItem('currentTheme') as ThemeType

  const [theme, setTheme] = useState<ThemeType>((savedTheme as ThemeType) || 'light')

  const changeTheme = (args: ThemeType) => {
    setTheme(args)
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem('currentTheme')
    if (currentTheme !== theme) {
      localStorage.setItem('currentTheme', theme)
    }
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('light', theme === 'light')
  }, [theme])

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>
}
