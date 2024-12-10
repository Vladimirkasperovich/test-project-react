import { Link } from 'react-router'
import { ThemeToggle } from '../theme-toggle/theme-toggle.tsx'
import { useContext } from 'react'
import { ThemeContext } from '../../app/index.ts'
import styles from './header.module.scss'
import { useTranslation } from 'react-i18next'
import { Dropdown } from '../dropdown/dropdown.tsx'

export const Header = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const handleChangeLang = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <header className={styles.light}>
      <Link to={'/'}>
        <h1 className={styles.info}>{t('main')}</h1>
      </Link>
      <Dropdown
        label={t('chooseLanguage')}
        options={[
          { label: t('currentLanguage.en'), value: 'en' },
          { label: t('currentLanguage.ru'), value: 'ru' },
        ]}
        onSelect={handleChangeLang}
      />
      <div>
        <ThemeToggle onToggle={changeTheme} theme={theme} />
      </div>
    </header>
  )
}
