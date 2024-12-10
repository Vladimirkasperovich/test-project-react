import styles from './sidebar.module.scss'
import { Link } from 'react-router'
import { sidebarItems } from '../../constant/constant.ts'
import { useTranslation } from 'react-i18next'

export const Sidebar = () => {
  const { t } = useTranslation()
  return (
    <nav className={styles.main}>
      <ul className={styles.list}>
        {sidebarItems.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <Link to={item.link}>{t(`sidebarItems.${item.value}`)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
