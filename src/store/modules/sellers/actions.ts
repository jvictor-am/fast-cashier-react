// local imports
import { ISeller, SellerTypes } from './types'


export function fetchSellers(callback?: () => void) {
  return {
    type: SellerTypes.FETCH_SELLERS,
    callback
  }
}

export function fetchSellersSuccess(response: ISeller[]) {
  return {
    type: SellerTypes.FETCH_SELLERS_SUCCESS,
    payload: response
  }
}
