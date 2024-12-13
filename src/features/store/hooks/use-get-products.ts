import { useEffect, useState } from 'react'
import { Product } from '../types/store.types.ts'
import { storeService } from '../services/store-api.ts'
import { AxiosError } from 'axios'

interface Props {
  products: Product[]
  loading: boolean
  error: string
}

export const useGetProducts = (): Props => {
  const [loading, setLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const data = await storeService.getProducts()
        setProducts(data)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setError(error.response?.data)
        }
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { products, loading, error }
}
