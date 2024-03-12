import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import { EMPTY } from '~/global/constants/constants'
import { ScreenPath, UserRole } from '~/global/enum'
import useAuth from '~/hooks/useAuth'
import InputTextForm from '../../components/form/InputTextForm'
import { FormWrapper } from './Login.styled'
import { ILoginFormProps } from './types/LoginForm'
import { loginValidationSchema } from './validation/LoginValidationSchema'

const LoginForm = () => {
  const defaultValues: ILoginFormProps = {
    email: EMPTY,
    password: EMPTY
  }
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(loginValidationSchema)
  })
  const { idToken, login, user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.role === UserRole.ADMIN || user?.role === UserRole.STAFF) {
      navigate(ScreenPath.DASHBOARD)
    } else if (user?.role === UserRole.DELIVERY_STAFF) {
      navigate(ScreenPath.DELIVERY)
    } else if (user?.role === UserRole.CONSULTANT_STAFF) {
      navigate(ScreenPath.CONSULTANT)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idToken])
  return (
    <FormWrapper onSubmit={handleSubmit(login)}>
      <InputTextForm
        control={control}
        name='email'
        label='Email'
        type='email'
        error={errors.email?.message}
        variant='standard'
      />
      <InputTextForm
        control={control}
        name='password'
        label='Mật khẩu'
        error={errors.password?.message}
        type='password'
        variant='standard'
      />
      <PrimaryButton type='submit' name='Đăng nhập' variant='contained' />
    </FormWrapper>
  )
}

export default LoginForm
