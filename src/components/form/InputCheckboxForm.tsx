/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, FormControl, FormControlLabel, FormLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ICheckboxGroupProps, ICheckboxOption } from '~/global/interfaces/interface'

const useCheckboxGroup = (defaultValues: any[] = []) => {
  const [selectedItems, setSelectedItems] = useState<any>(defaultValues)

  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value)
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value)
      setSelectedItems(remaining)
    } else {
      setSelectedItems((prevItems: any) => [...prevItems, value])
    }
  }

  return { selectedItems, handleSelect }
}

const InputCheckboxForm = ({
  name,
  label,
  options,
  defaultValues,
  onSelectionChange
}: ICheckboxGroupProps & { onSelectionChange: (selectedItems: string[]) => void }) => {
  const { control, setValue } = useForm()
  const { selectedItems, handleSelect } = useCheckboxGroup(defaultValues)

  useEffect(() => {
    if (name) {
      setValue(name, selectedItems)
      onSelectionChange(selectedItems)
    }
  }, [selectedItems, setValue, name, onSelectionChange])

  return (
    <FormControl size={'small'} variant={'outlined'}>
      <FormLabel component='legend'>{label}</FormLabel>
      <div>
        {options.map((option: ICheckboxOption) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name || option.value}
                  render={({ field }) => {
                    return (
                      <Checkbox
                        {...field}
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    )
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          )
        })}
      </div>
    </FormControl>
  )
}

export default InputCheckboxForm
