import { storeInstance } from './instance.ts'
import { CategoriesType, Product } from '../types/store.types.ts'

class StoreService {
  private async getAllProduct(): Promise<Product[]> {
    return (await storeInstance.get<Product[]>('/products')).data
  }
  private async getAllProductByCategory(category: CategoriesType): Promise<Product[]> {
    return (await storeInstance.get<Product[]>(`/products/category/${category}`)).data
  }
  public getProducts = this.getAllProduct
  public getProductsByCategory = this.getAllProductByCategory
}

export const storeService = new StoreService()
