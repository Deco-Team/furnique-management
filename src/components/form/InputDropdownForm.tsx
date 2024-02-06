import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Controller } from 'react-hook-form'
import { IDropdownOption, IFormInputDropdownProps } from '~/global/interfaces/interface'

const InputDropdownForm = ({ name, control, label, options }: IFormInputDropdownProps) => {
  const generateSingleOptions = () => {
    return options.map((option: IDropdownOption) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }
  return (
    <>
      <FormControl size={'small'}>
        <InputLabel>{label}</InputLabel>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Select onChange={onChange} value={value}>
              {generateSingleOptions()}
            </Select>
          )}
          control={control}
          name={name}
        />
      </FormControl>
    </>
  )
}

export default InputDropdownForm
