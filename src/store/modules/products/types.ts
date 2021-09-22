// local imports
import { fetchProducts } from './actions'


export enum ProductTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
}

export interface IProduct {
  id: number;
  name: string;
  price: string;
  fixed_commission_percentage: string;
  variable_commission_percentage: string;
}

export type fetchProductsType = ReturnType<typeof fetchProducts>
