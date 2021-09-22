export interface IProductOptions {
  key: number,
  text: string,
  value: number
}

export interface ISellerOptions {
  key: number,
  text: string,
  value: number
}

export interface ICustomerOptions {
  key: number,
  text: string,
  value: number
}

export type typeInput = string | number | boolean | (string | number | boolean)[] | undefined

export interface IAddProduct {
  id: number;
  product: string;
  product_name: string;
  quantity: number;
  price: string;
  total: string;
}