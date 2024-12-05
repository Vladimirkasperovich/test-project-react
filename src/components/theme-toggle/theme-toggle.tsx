import { FC, useState } from 'react'
import styles from './theme-toggle.module.scss'

type ModeTheme = 'light' | 'dark'
interface Props {
  onToggle: (theme: ModeTheme) => void
}

export const ThemeToggle: FC<Props> = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    onToggle(isDarkMode ? 'dark' : 'light')
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
