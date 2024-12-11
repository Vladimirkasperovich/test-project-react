import { Link } from 'react-router'
import { ThemeToggle } from '../theme-toggle/theme-toggle.tsx'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../app/index.ts'
import { useTranslation } from 'react-i18next'
import { Dropdown } from '../dropdown/dropdown.tsx'
import styles from './header.module.scss'

export const Header = () => {
  const savedLanguage = localStorage.getItem('currentLanguage') as string
  const { changeTheme, theme } = useContext(ThemeContext)
  const [text, setText] = useState<string>(savedLanguage || 'en')
  const { t, i18n } = useTranslation()

  const handleChangeLang = (value: string) => {
    setText(value)
  }

  useEffect(() => {
    localStorage.setItem('currentLanguage', text)
    i18n.changeLanguage(text)
  }, [text])

  return (
    <header className={styles.light}>
      <Link to={'/'}>
        <h1 className={styles.info}>{t('main')}</h1>
      </Link>
      <div>
        <Dropdown
          label={t('chooseLanguage')}
          options={[
            { label: t('currentLanguage.en'), value: 'en' },
            { label: t('currentLanguage.ru'), value: 'ru' },
          ]}
          onSelect={handleChangeLang}
        />
      </div>
      <div>
        <ThemeToggle onToggle={changeTheme} theme={theme} />
      </div>
    </header>
  )
}
