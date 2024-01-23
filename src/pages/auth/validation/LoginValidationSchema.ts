import { string, object } from 'yup'
export const loginValidationSchema = object().shape({
  username: string().required('Username is required'),
  password: string().min(8, 'Password must be at least 8 characters').required('Password is required')
})
