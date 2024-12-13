import { useParams } from 'react-router'
import { CategoriesType, StoreCard, useGetCategoryProducts } from '../../../features'

export const ProductsPage = () => {
  const params = useParams<{ category: CategoriesType }>()
  const { products, loading } = useGetCategoryProducts(params.category as CategoriesType)

  if (loading) {
    return <div>...Loading</div>
  }

  return (
    <div>
      {products.map((product) => (
        <StoreCard key={product.id} product={product} />
      ))}
    </div>
  )
}
