import { string, object } from 'yup'
export const addCategoryValidationSchema = object().shape({
  name: string().trim().required('Tên phân loại là bắt buộc'),
  description: string().trim().required('Mô tả là bắt buộc')
})
