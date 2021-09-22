// local imports
import { ICreateOrder, IOrderResponse, OrderTypes } from './types'


export function fetchOrders(callback?: () => void) {
  return {
    type: OrderTypes.FETCH_ORDERS,
    callback
  }
}

export function fetchOrdersSuccess(response: IOrderResponse) {
  return {
    type: OrderTypes.FETCH_ORDERS_SUCCESS,
    payload: response
  }
}

export function createOrder(data: ICreateOrder, callback?: () => void) {
  return {
    type: OrderTypes.CREATE_ORDER,
    payload: data,
    callback
  }
}
