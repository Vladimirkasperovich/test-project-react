import styles from './store-card.module.scss'
import { Product } from '../../types/store.types.ts'
import { FC } from 'react'

interface Props {
  product: Product
}

export const StoreCard: FC<Props> = ({ product }) => {
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <h5 className={styles.product__title}>{product.title}</h5>
        <img className={styles.product__image} src={product.image} alt={'product image'} />
        <p className={styles.product__description}>{product.description}</p>
        <p className={styles.product__price}>{product.price}</p>
      </div>
    </div>
  )
}
