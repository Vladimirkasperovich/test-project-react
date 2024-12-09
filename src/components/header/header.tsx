import { Link } from 'react-router'
import { ThemeToggle } from '../theme-toggle/theme-toggle.tsx'
import { useContext } from 'react'
import { ThemeContext } from '../../app/context/theme-context'
import styles from './header.module.scss'

export const Header = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  return (
    <header className={styles.light}>
      <Link to={'/'}>
        <h1 className={styles.info}>Home</h1>
      </Link>
      <div>
        <ThemeToggle onToggle={changeTheme} theme={theme} />
      </div>
    </header>
  )
}
