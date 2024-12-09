import styles from './layout.module.scss'
import { Header } from '../header/header.tsx'
import { Sidebar } from '../sidebar/sidebar.tsx'
import { Content } from '../content/content.tsx'
import { ThemeProvider } from '../../app/index.ts'

export const Layout = () => {
  return (
    <ThemeProvider>
      <div className={styles.main}>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </ThemeProvider>
  )
}
