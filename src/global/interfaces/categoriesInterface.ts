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
