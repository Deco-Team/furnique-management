import { Button } from '@mui/material'
import { ICustomButtonProps } from '~/global/interface'

const CustomButton = (props: ICustomButtonProps) => {
  const { name, icon, variant, sx, type, onClick } = props
  return (
    <Button name={name} startIcon={icon} variant={variant} sx={sx} type={type} onClick={onClick}>
      {name}
    </Button>
  )
}

export default CustomButton
