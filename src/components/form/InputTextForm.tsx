import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '~/global/interface'

const InputTextForm = ({ name, label, control, type }: IFormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant='standard'
          type={type}
        />
      )}
    />
  )
}

export default InputTextForm
