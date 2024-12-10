import { FC, useState } from 'react'
import { ThemeType } from '../../app/context/theme-context.ts'
import styles from './theme-toggle.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  onToggle: (theme: ThemeType) => void
  theme: ThemeType
}

export const ThemeToggle: FC<Props> = ({ onToggle, theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(theme !== 'light')
  const { t } = useTranslation()
  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState)
    onToggle(isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className={styles.toggle}>
      <span>{isDarkMode ? t('themeMode.dark') : t('themeMode.light')}</span>
      <label className={styles.switch}>
        <input type='checkbox' checked={isDarkMode} onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}
