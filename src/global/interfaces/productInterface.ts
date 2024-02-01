export interface IProduct {
  _id: string
  name: string
  description: string
  images: string[]
  rate: number
  brand: string
  variants: IVariant[]
  categories: string[]
}

interface IDimensions {
  height: number
  width: number
  length: number
}

interface IKeyValue {
  color: string
  material: string
}

interface IVariant {
  sku: string
  price: number
  quantity: number
  dimensions: IDimensions
  keyValue: IKeyValue
}
