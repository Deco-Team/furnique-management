import { ICustomButtonProps } from '~/global/interface'
import CustomButton from './CustomButton'

const PrimaryButton = (props: ICustomButtonProps) => {
  const { name } = props
  return (
    <>
      <CustomButton
        variant='contained'
        name={name}
        type='submit'
        sx={{
          width: '165px',
          height: '45px',
          textTransform: 'uppercase',
          fontSize: '14px',
          padding: '10px',
          lineHeight: '1.2',
          color: 'var(--white-color)'
        }}
      />
    </>
  )
}

export default PrimaryButton
