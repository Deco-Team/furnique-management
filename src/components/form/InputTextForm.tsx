import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'
import { IFormInputProps } from '~/global/interfaces/interface'

const InputTextForm = ({
  name,
  label,
  control,
  type,
  sx,
  variant,
  multiline,
  rows,
  placeholder,
  defaultValues
}: IFormInputProps) => {
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
          variant={variant}
          type={type}
          sx={sx}
          multiline={multiline}
          rows={rows}
          placeholder={placeholder}
          defaultValue={defaultValues}
        />
      )}
    />
  )
}

export default InputTextForm
