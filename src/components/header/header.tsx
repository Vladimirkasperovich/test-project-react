import styles from './header.module.scss'
import { Link } from 'react-router'
import { ThemeToggle } from '../theme-toggle/theme-toggle.tsx'
import { useContext } from 'react'
import { ThemeContext } from '../../app/theme-provider.tsx'

export const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  return (
    <header className={styles.light}>
      <Link to={'/'}>
        <h1 className={styles.info}>Home</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}
