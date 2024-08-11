'use client'

import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'

export type ControlledSelectProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  options: { value: string; label: string }[]
} & SelectProps

export const ControlledSelect = <TFormValues extends Record<string, unknown>>({
  name,
  options,
  ...rest
}: ControlledSelectProps<TFormValues>) => {
  const { control } = useFormContext<TFormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <FormControl error={Boolean(error)} fullWidth={rest.fullWidth}>
          {rest.label && <InputLabel>{rest.label}</InputLabel>}
          <Select onChange={onChange} inputRef={ref} value={value} {...rest}>
            <MenuItem value=''>{rest.placeholder}</MenuItem>
            {options.map((el, i) => {
              return (
                <MenuItem key={i} value={el.value}>
                  {el.label}
                </MenuItem>
              )
            })}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}
