// local imports
import { fetchOrders, createOrder } from './actions'


export enum OrderTypes {
  FETCH_ORDERS = 'FETCH_ORDERS',
  FETCH_ORDERS_SUCCESS =  'FETCH_ORDERS_SUCCESS',
  CREATE_ORDER = 'CREATE_ORDER',
}

export interface IProduct {
  id: number;
  product: number;
  price: string;
  quantity: number;
  fixed_commission_percentage: string;
  variable_commission_percentage: string | null;
}

export interface IOrderResponse {
  id: number;
  created: string;
  customer_name: string;
  seller_name: string;
  total_price: number;
  total_commission: number;
  items: IProduct[]
}

export interface IProductCreateOrder {
  product: number;
  quantity: number;
}

export interface ICreateOrder {
  customer: number;
  seller: number;
  items: IProductCreateOrder[];
}

export type fetchOrdersType = ReturnType<typeof fetchOrders>
export type createOrderType = ReturnType<typeof createOrder>
