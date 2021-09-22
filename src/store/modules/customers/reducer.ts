// third party imports
import { Reducer } from 'redux'

// local imports
import {
  ICustomer,
  CustomerTypes,
} from './types'


const STATE_DEFAULT: ICustomer[] = [
  {
    id: 0,
    name: '',
  }
]

export const customers: Reducer<ICustomer[]> = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case CustomerTypes.FETCH_CUSTOMERS_SUCCESS:
      return action.payload

    default:
      return state
  }
}
