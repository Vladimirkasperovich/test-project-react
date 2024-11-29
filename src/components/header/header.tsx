import styles from './header.module.scss'
import { Link } from 'react-router'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Link to={'/'}>
        <h1 className={styles.info}>Home</h1>
      </Link>
    </header>
  )
}
