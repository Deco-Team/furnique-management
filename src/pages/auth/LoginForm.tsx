import { useForm } from 'react-hook-form'
import PrimaryButton from '~/components/button/PrimaryButton'
import InputTextForm from '../../components/form/InputTextForm'
import { ILoginForm } from './types/LoginForm'
import { FormWrapper } from './Login.styled'

const LoginForm = () => {
  const { control, handleSubmit } = useForm<ILoginForm>()
  const handleSubmitButton = () => {
    console.log('Login!')
  }
  return (
    <FormWrapper onSubmit={handleSubmit(handleSubmitButton)}>
      <InputTextForm control={control} name='username' label='Username' />
      <InputTextForm control={control} name='password' label='Password' />
      <PrimaryButton name='Login' variant='contained' />
    </FormWrapper>
  )
}

export default LoginForm
