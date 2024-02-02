import { ICategory } from './categoriesInterface'

interface IVariant {
  sku: string
  price: number
  quantity: number
  dimensions: {
    height: number
    width: number
    length: number
  }
  keyValue: {
    color: string
    material: string
  }
}
export interface IProduct {
  _id: string
  name: string
  description: string
  images: string[]
  rate: number
  brand: string
  variants: IVariant[]
  categories: ICategory[]
  status: string
  createdAt: string
  updatedAt: string
}

export interface IProductsResponse {
  docs: IProduct[]
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
