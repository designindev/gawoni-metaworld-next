'use client'

import { Button } from '@mui/material'
import React, { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  children?: ReactNode
}

export const ButtonForm = (props: Props) => {
  const {
    formState: { isSubmitting, isDirty },
  } = useFormContext()

  return <Button>{props.children}</Button>
}
