import { string, object } from 'yup'
export const addCategoryValidationSchema = object().shape({
  name: string().required('Tên phân loại là bắt buộc'),
  description: string().required('Mô tả là bắt buộc')
})
