'use client'

import { TextField, TextFieldProps } from '@mui/material'
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form'

export type InputFormProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
} & TextFieldProps

export const ControlledInput = <TFormValues extends Record<string, unknown>>({
  name,
  ...rest
}: InputFormProps<TFormValues>) => {
  const { control } = useFormContext<TFormValues>()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          inputRef={ref}
          value={value}
          {...rest}
        />
      )}
    />
  )
}
