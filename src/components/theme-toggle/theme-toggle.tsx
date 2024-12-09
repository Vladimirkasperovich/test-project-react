import { FC, useState } from 'react'
import { ThemeType } from '../../app/context/theme-context.ts'
import styles from './theme-toggle.module.scss'

interface Props {
  onToggle: (theme: ThemeType) => void
  theme: ThemeType
}

export const ThemeToggle: FC<Props> = ({ onToggle, theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(theme !== 'light')
  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState)
    onToggle(isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className={styles.toggle}>
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <label className={styles.switch}>
        <input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}
