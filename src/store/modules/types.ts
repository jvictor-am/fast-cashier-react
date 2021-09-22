// local imports
import { IProduct } from './products/types'
import { ISeller } from './sellers/types'
import { ICustomer } from './customers/types'
import { IOrderResponse } from './orders/types'

export interface IState {
  products: IProduct[],
  sellers: ISeller[],
  customers: ICustomer[],
  orders: IOrderResponse[],
}
