import { ICustomButtonProps } from '~/global/interface'
import CustomButton from './CustomButton'

const PrimaryButton = (props: ICustomButtonProps) => {
  const { name, onClick, icon } = props
  return (
    <>
      <CustomButton
        variant='contained'
        name={name}
        type='submit'
        icon={icon}
        sx={{
          textTransform: 'uppercase',
          fontSize: '14px',
          margin: '10px',
          padding: '10px',
          lineHeight: '1.2',
          color: 'var(--primary-color)',
          backgroundColor: 'var(--primary-light-color)',
          '&:hover': {
            backgroundColor: 'var(--primary-color)',
            color: 'var(--white-color)'
          }
        }}
        onClick={onClick}
      />
    </>
  )
}

export default PrimaryButton
