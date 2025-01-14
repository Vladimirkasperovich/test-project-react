import { useParams } from 'react-router'
import { CategoriesType, StoreCard, useGetCategoryProducts } from '../../../features'
import styles from './product-page.module.scss'

export const ProductsPage = () => {
  const params = useParams<{ category: CategoriesType }>()
  const { products } = useGetCategoryProducts(params.category as CategoriesType)

  // if (loading) {
  //   return <div>...Loading</div>
  // }

  return (
    <div className={styles.main}>
      {products.map((product) => (
        <StoreCard key={product.id} product={product} />
      ))}
    </div>
  )
}
