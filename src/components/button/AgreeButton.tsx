import { ICustomButtonProps } from '~/global/interfaces/interface'
import CustomButton from './CustomButton'

const AgreeButton = (props: ICustomButtonProps) => {
  const { name, onClick, icon, sx } = props
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
          color: 'var(--green-color)',
          backgroundColor: 'var(--green-light-color)',
          '&:hover': {
            backgroundColor: 'var(--green-color)',
            color: 'var(--white-color)'
          },
          '&:focus': {
            outline: 'none'
          },
          ...sx
        }}
        onClick={onClick}
      />
    </>
  )
}

export default AgreeButton
