export interface ICategory {
  _id?: string
  name: string
  description: string
  image: string
}

export interface ICategoryRows {
  id: string
  name: string
  sold: number
  stock: number
  added: Date
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
