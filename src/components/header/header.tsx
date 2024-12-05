import styles from './header.module.scss'
import { Link } from 'react-router'
import { useState } from 'react'

export const Header = () => {
  const [state, setState] = useState(false)
  return (
    <header className={styles.light} onClick={() => setState(!state)}>
      <Link to={'/'}>
        <h1 className={styles.info}>Home</h1>
      </Link>
    </header>
  )
}
