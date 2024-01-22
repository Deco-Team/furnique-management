import { ICustomButtonProps } from '~/global/interface'
import CustomButton from './CustomButton'

const PrimaryButton = (props: ICustomButtonProps) => {
  const { name } = props
  return (
    <>
      <CustomButton
        variant='contained'
        name={name}
        sx={{
          backgroundColor: 'var(--primary-color)',
          width: { sm: '165px', xs: '115px' },
          height: '45px',
          textTransform: 'capitalize',
          fontSize: '14px',
          padding: '10px',
          lineHeight: '1.2',
          '&:hover': {
            backgroundColor: 'var(--primary-dark-color)'
          }
        }}
      />
    </>
  )
}

export default PrimaryButton
