// local imports
import { fetchCustomers } from './actions'


export enum CustomerTypes {
  FETCH_CUSTOMERS = 'FETCH_CUSTOMERS',
  FETCH_CUSTOMERS_SUCCESS =  'FETCH_CUSTOMERS_SUCCESS',
}

export interface ICustomer {
  id: number;
  name: string;
}

export type fetchCustomersType = ReturnType<typeof fetchCustomers>