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
        <h5>{product.title}</h5>
        <img src={product.image} alt={'product image'} />
      </div>
    </div>
  )
}
