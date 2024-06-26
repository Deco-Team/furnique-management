/* eslint-disable @typescript-eslint/no-unused-vars */
import { Control } from 'react-hook-form'
import { ICategory } from './categoriesInterface'

export interface KeyValuePair {
  key: string
  value: string
}

export interface IVariant {
  sku: string
  price: number
  quantity: number
  dimensions: {
    height: number
    width: number
    length: number
  }
  keyValue: Record<string, KeyValuePair>
}

export interface IVariantDetail {
  sku: string
  price: number
  quantity: number
  dimensions: {
    height: number
    width: number
    length: number
  }
  keyValue: Map<string, string>
}

export interface IProduct {
  _id: string
  name: string
  description: string
  slug: string
  images: string[]
  rate: number
  brand: string
  variants: IVariant[]
  categories: ICategory[]
  status: string
  createdAt: string
  updatedAt: string
}

export interface IProductDetail {
  _id: string
  name: string
  description: string
  slug: string
  images: string[]
  rate: number
  arPlacement: 'floor' | 'wall'
  brand: string
  variants: IVariantDetail[]
  categories: ICategory[]
  status: string
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

export interface IProductsRequest {
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

export interface IProductRows {
  _id: string
  name: string
  sku: string
  category: string
  stock: number
  price: number
  status: string
  added: Date
}

export interface IVariantsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors?: string
}
