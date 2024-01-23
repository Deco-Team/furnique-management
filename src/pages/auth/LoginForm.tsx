import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import { EMPTY } from '~/global/constants'
import InputTextForm from '../../components/form/InputTextForm'
import { FormWrapper } from './Login.styled'
import { ILoginForm } from './types/LoginForm'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidationSchema } from './validation/LoginValidationSchema'

const LoginForm = () => {
  const defaultValues: ILoginForm = {
    username: EMPTY,
    password: EMPTY
  }
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    defaultValues: defaultValues,
    resolver: yupResolver(loginValidationSchema)
  })
  const navigate = useNavigate()
  const handleSubmitButton = () => {
    navigate('/dashboard')
  }
  return (
    <FormWrapper onSubmit={handleSubmit(handleSubmitButton)}>
      <InputTextForm control={control} name='username' label='Tên đăng nhập' error={errors.username?.message} />
      <InputTextForm control={control} name='password' label='Mật khẩu' />
      <PrimaryButton type='submit' name='Login' variant='contained' />
    </FormWrapper>
  )
}

export default LoginForm
