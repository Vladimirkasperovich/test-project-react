import { StoreCard, useGetProducts } from '../../features'
import styles from './store-page.module.scss'

export const StorePage = () => {
  const { loading, products } = useGetProducts()
  if (loading) {
    return <h1>...Loading</h1>
  }
  return (
    <div className={styles.main}>
      {products.map((product) => (
        <StoreCard key={product.id} product={product} />
      ))}
    </div>
  )
}
