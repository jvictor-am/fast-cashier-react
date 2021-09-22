// third party imports
import { all } from 'redux-saga/effects'

// local imports
import heroes_saga from './products/sagas'
import sellers_saga from './sellers/sagas'
import customers_saga from './customers/sagas'
import orders_saga from './orders/sagas'


export default function* rootSaga(): Generator {
  return yield all([
    heroes_saga,
    sellers_saga,
    customers_saga,
    orders_saga
  ])
}
