import { FC, ReactNode, useEffect, useState } from 'react'
import { createContext } from 'node:vm'

interface Props {
  children: ReactNode
}

export const ThemeContext = createContext()

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    if (theme === 'dark') document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }, [theme])
  return <ThemeContext.provider>{children}</ThemeContext.provider>
}
