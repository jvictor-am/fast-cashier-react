// third party imports
import { Reducer } from 'redux'

// local imports
import {
  ISeller,
  SellerTypes,
} from './types'


const STATE_DEFAULT: ISeller[] = [
  {
    id: 0,
    name: '',
  }
]

export const sellers: Reducer<ISeller[]> = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case SellerTypes.FETCH_SELLERS_SUCCESS:
      return action.payload

    default:
      return state
  }
}
