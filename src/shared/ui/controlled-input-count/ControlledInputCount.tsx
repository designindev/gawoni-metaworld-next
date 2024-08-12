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

export const ControlledInputCount = (props: { onChange: (value: number) => void }) => {
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
              onClick={() => {
                const newValue = value - 1
                if (newValue <= 0) return
                onChange(newValue)
                props.onChange(newValue)
              }}
            >
              <RemoveIcon fontSize={'large'} />
            </Button>
            <OutlinedInput
              type='number'
              value={value}
              onChange={onChange}
              inputRef={ref}
              inputProps={{ sx: { textAlign: 'center' } }}
              sx={{ width: 44, height: 44 }}
              readOnly
            />
            <Button
              variant='text'
              color='secondary'
              sx={buttonSxProps}
              type='button'
              onClick={() => {
                const newValue = value + 1
                if (newValue > 10) return
                onChange(newValue)
                props.onChange(newValue)
              }}
            >
              <AddIcon fontSize={'large'} />
            </Button>
          </>
        )}
      />
    </Stack>
  )
}
