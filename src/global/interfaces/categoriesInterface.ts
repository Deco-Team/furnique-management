export interface ICategory {
  _id: string
  name: string
  description: string
  image: string
}

export interface ICategoryRows {
  id: number
  categoryName: string
  sold: number
  stock: number
  added: string
}
