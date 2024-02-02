import { IProduct } from './productInterface'

interface ICustomer {
  firstName: string
  lastName: string
  email: string
  phone: string
  shippingAddress: string
  _id: string
}

interface IItem {
  productId: string
  sku: string
  quantity: number
  product: IProduct
}

export interface IOrder {
  _id: string
  customer: ICustomer
  items: IItem[]
  totalAmount: number
  orderDate: string
  orderStatus: string
  transactionStatus: string
  notes: string
  createdAt: string
  updatedAt: string
}

export interface IOrdersResponse {
  docs: IOrder[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null | number
  nextPage: null | number
}

export interface IOrdersRows {
  id: string
  product: string
  orderDate: Date
  customer: string
  total: number
  payment: string
  status: string
}
