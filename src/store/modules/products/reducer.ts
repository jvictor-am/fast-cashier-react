// third party imports
import { Reducer } from 'redux'

// local imports
import {
  IProduct,
  ProductTypes,
} from './types'


const STATE_DEFAULT: IProduct[] = [
  {
    id: 0,
    name: '',
    price: '',
    fixed_commission_percentage: '',
    variable_commission_percentage: '',
  }
]

export const products: Reducer<IProduct[]> = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case ProductTypes.FETCH_PRODUCTS_SUCCESS:
      return action.payload

    default:
      return state
  }
}
