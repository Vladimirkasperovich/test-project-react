import { CategoriesType, Product } from '../types/store.types.ts'
import { useEffect, useState } from 'react'
import { storeService } from '../services/store-api.ts'
import { AxiosError } from 'axios'

interface Props {
  loading: boolean
  error: string
  products: Product[]
}

export const useGetCategoryProducts = (category: CategoriesType): Props => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const promise = await storeService.getProductsByCategory(category)
        setProducts(promise)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setError(error.response?.data.message)
        }
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { loading, error, products }
}
