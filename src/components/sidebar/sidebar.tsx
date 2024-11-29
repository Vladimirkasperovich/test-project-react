import styles from './sidebar.module.scss'
import { Link } from 'react-router'
import { sidebarItems } from '../../constant/constant.ts'

export const Sidebar = () => {
  return (
    <nav className={styles.main}>
      <ul className={styles.list}>
        {sidebarItems.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <Link to={item.link}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
