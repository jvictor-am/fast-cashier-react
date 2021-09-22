// third party imports
import { Reducer } from 'redux'

// local imports
import {
  IOrderResponse,
  OrderTypes,
} from './types'


const STATE_DEFAULT: IOrderResponse[] = [{
  id: 0,
  created: '',
  customer_name: '',
  seller_name: '',
  total_price: 0,
  total_commission: 0,
  items: []
}]


export const orders: Reducer<IOrderResponse[]> = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case OrderTypes.FETCH_ORDERS_SUCCESS:
      return action.payload

    default:
      return state
  }
}
