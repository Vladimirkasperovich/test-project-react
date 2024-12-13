import { storeInstance } from './instance.ts'
import { CategoriesType, Product } from '../types/store.types.ts'

class StoreService {
  private async getAllProduct(): Promise<Product[]> {
    return (await storeInstance.get<Product[]>('/products')).data
  }
  private async getAllCategories(): Promise<CategoriesType[]> {
    return (await storeInstance.get<CategoriesType[]>('/products/categories')).data
  }

  public getProducts = this.getAllProduct
  public getCategories = this.getAllCategories()
}

export const storeService = new StoreService()
