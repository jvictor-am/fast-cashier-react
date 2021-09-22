// local imports
import { IProduct, ProductTypes } from './types'


export function fetchProducts(callback?: () => void) {
  return {
    type: ProductTypes.FETCH_PRODUCTS,
    callback
  }
}

export function fetchProductsSuccess(response: IProduct[]) {
  return {
    type: ProductTypes.FETCH_PRODUCTS_SUCCESS,
    payload: response
  }
}
