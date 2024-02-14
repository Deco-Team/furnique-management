/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { IRadioGroupProps } from '~/global/interfaces/interface'

const InputRadioForm: React.FC<IRadioGroupProps> = ({ label, options, defaultValue, sx }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0].value)

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  return (
    <FormControl component='fieldset' sx={sx}>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup value={selectedValue} onChange={handleRadioChange} sx={{ flexDirection: 'row' }}>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} label={option.label} control={<Radio />} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
export default InputRadioForm
