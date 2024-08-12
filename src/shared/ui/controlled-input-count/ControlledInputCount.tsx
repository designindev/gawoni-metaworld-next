'use client'

import React, { InputHTMLAttributes, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Button, Input, OutlinedInput, Stack, SxProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const buttonSxProps: SxProps = {
  minWidth: 'auto',
  width: 44,
  height: 44,
  padding: 0,
  borderRadius: 1,
  '&:hover': {
    bgcolor: 'secondary.main',
    color: '#fff',
  },
}

export const ControlledInputCount = (props: Props) => {
  const { control } = useFormContext()

  return (
    <Stack direction={'row'} spacing={1}>
      <Controller
        name={'quantity'}
        control={control}
        render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
          <>
            <Button
              variant='text'
              color='secondary'
              sx={buttonSxProps}
              type='button'
              onClick={() => onChange(String(Number(value) - 1))}
            >
              <RemoveIcon fontSize={'large'} />
            </Button>
            <OutlinedInput
              type='number'
              value={value}
              onChange={onChange}
              inputRef={ref}
              defaultValue='Hello world'
              inputProps={{ sx: { textAlign: 'center' } }}
              sx={{ width: 44, height: 44 }}
            />
            <Button
              variant='text'
              color='secondary'
              sx={buttonSxProps}
              type='button'
              onClick={() => onChange(String(Number(value) + 1))}
            >
              <AddIcon fontSize={'large'} />
            </Button>
          </>
        )}
      />
    </Stack>
  )
}
