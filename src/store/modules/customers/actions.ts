// local imports
import { ICustomer, CustomerTypes } from './types'


export function fetchCustomers(callback?: () => void) {
  return {
    type: CustomerTypes.FETCH_CUSTOMERS,
    callback
  }
}

export function fetchCustomersSuccess(response: ICustomer[]) {
  return {
    type: CustomerTypes.FETCH_CUSTOMERS_SUCCESS,
    payload: response
  }
}
