import { StoreCard, useGetProducts } from '../../features'
import styles from './store-page.module.scss'

export const StorePage = () => {
  const { error, loading, products } = useGetProducts()
  if (loading) {
    return <h1>...Loading</h1>
  }
  return (
    <div className={styles.main}>
      {error && <p>{error}</p>}
      <div>
        {products.map((product) => (
          <StoreCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
