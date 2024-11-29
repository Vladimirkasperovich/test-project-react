import { storeInstance } from './instance.ts'
import { Product } from '../types/store.types.ts'

class StoreService {
  private async getAllProduct(): Promise<Product[]> {
    return (await storeInstance.get<Product[]>('/products')).data
  }

  public getProducts = this.getAllProduct
}

export const storeService = new StoreService()
