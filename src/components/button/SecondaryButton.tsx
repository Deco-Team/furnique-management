import { ICustomButtonProps } from '~/global/interface'
import CustomButton from './CustomButton'

const SecondaryButton = ({ color, ...props }: ICustomButtonProps & { color?: string }) => {
  const { name, onClick, icon } = props
  return (
    <CustomButton
      variant='outlined'
      name={name}
      type='submit'
      sx={{
        textTransform: 'uppercase',
        fontSize: '14px',
        margin: '10px',
        padding: '10px',
        lineHeight: '1.2',
        color: color || 'var(--white-color)',
        borderColor: color || 'var(--white-color)',
        '&:hover': {
          color: 'var(--primary-color)'
        }
      }}
      icon={icon}
      onClick={onClick}
    />
  )
}

export default SecondaryButton
