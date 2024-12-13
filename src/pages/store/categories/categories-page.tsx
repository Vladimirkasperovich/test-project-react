import styles from './categories-page.module.scss'
import { CategoriesType } from '../../../features'
import { Link } from 'react-router'

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
        <li key={category} className={styles.list_item}>
          <Link to={`/store/categories/${category}`}> {category}</Link>
        </li>
      ))}
    </ul>
  )
}
