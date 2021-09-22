// third party imports
import { combineReducers } from 'redux'

// local imports
import { products } from './products/reducer'
import { sellers } from './sellers/reducer'
import { customers } from './customers/reducer'
import { orders } from './orders/reducer'


export default combineReducers({
  products,
  sellers,
  customers,
  orders
})
