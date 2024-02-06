import { array, number, object, string } from 'yup'

const variantSchema = object().shape({
  sku: string().required('SKU là bắt buộc'),
  price: number().required('Giá là bắt buộc'),
  quantity: number().required('Số lượng là bắt buộc'),
  dimensions: object()
    .shape({
      length: number().required(),
      height: number().required(),
      width: number().required()
    })
    .required(),
  keyValue: object().shape({}).required() // Assuming keyValue is an object, adjust accordingly
})

export const addProductValidationSchema = object().shape({
  name: string().required('Tên phân loại là bắt buộc'),
  description: string().required('Mô tả là bắt buộc'),
  images: array().of(string().required()).required('Cần có ít nhất 1 ảnh'),
  brand: string().required('Thương hiệu là bắt buộc'),
  variants: array().of(variantSchema).required('Phân loại là bắt buộc'),
  categories: array().of(string().required()).required('Danh mục là bắt buộc')
})
