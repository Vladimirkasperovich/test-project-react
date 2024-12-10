import { Link } from 'react-router'
import { ThemeToggle } from '../theme-toggle/theme-toggle.tsx'
import { ChangeEvent, useContext } from 'react'
import { ThemeContext } from '../../app/index.ts'
import styles from './header.module.scss'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const handleChangeLang = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <header className={styles.light}>
      <Link to={'/'}>
        <h1 className={styles.info}>{t('main')}</h1>
      </Link>
      <div>
        <label htmlFor='lang'>{t('chooseLanguage')}</label>
        <select id='lang' onChange={handleChangeLang}>
          <option value='en'>{t('currentLanguage.en')}</option>
          <option value='ru'>{t('currentLanguage.ru')}</option>
        </select>
      </div>
      <div>
        <ThemeToggle onToggle={changeTheme} theme={theme} />
      </div>
    </header>
  )
}
