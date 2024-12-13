import styles from './categories-page.module.scss'
import { CategoriesType } from '../../../features'

export const CategoriesPage = () => {
  const categories: CategoriesType[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ]

  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={crypto.randomUUID()} className={styles.list_item}>
          {category}
        </li>
      ))}
    </ul>
  )
}
