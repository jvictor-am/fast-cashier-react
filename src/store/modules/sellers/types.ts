// local imports
import { fetchSellers } from './actions'


export enum SellerTypes {
  FETCH_SELLERS = 'FETCH_SELLERS',
  FETCH_SELLERS_SUCCESS =  'FETCH_SELLERS_SUCCESS',
}

export interface ISeller {
  id: number;
  name: string;
}

export type fetchSellersType = ReturnType<typeof fetchSellers>
