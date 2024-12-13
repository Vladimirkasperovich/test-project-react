import styles from './store-page.module.scss'
import { CategoriesPage } from './categories/categories-page.tsx'

export const StorePage = () => {
  return (
    <div className={styles.main}>
      <CategoriesPage />
    </div>
  )
}
