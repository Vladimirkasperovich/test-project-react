import styles from './layout.module.scss'
import { Header } from '../header/header.tsx'
import { Sidebar } from '../sidebar/sidebar.tsx'
import { Content } from '../content/content.tsx'

export const Layout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}
