'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { ControlledInput } from 'shared/ui'
import { ResetPasswordformSchema, resetPasswordFormSchema } from '../model/reset-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRouter } from 'next/navigation'
import { Button, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

//! FIX: MERGE - RESET PASSWORD / NEW PASSWORD / PASSWORD RESET SUCCESS
export const ResetPasswordForm = () => {
  const router = useRouter()
  const methods = useForm<ResetPasswordformSchema>({
    resolver: zodResolver(resetPasswordFormSchema),
    criteriaMode: 'all',
    defaultValues: { email: '' },
  })

  const onSubmitHandler = useCallback(
    async (data: ResetPasswordformSchema) => {
      //! FIX: ADD LOGIC
      //! FIX: VIA STATE
      router.push(`${PATH_PAGE.checkEmail}?email=${data.email}`)
      notifySuccess('You have successfully reseted password')
    },
    [router]
  )

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormProvider {...methods}>
          <ControlledInput<ResetPasswordformSchema>
            type='email'
            name='email'
            label='Enter your email'
            placeholder='Enter your email'
            fullWidth
          />
          <Stack alignItems={'center'} spacing={6} mt={6}>
            <Button type='submit'>Send</Button>
            <Button color={'white'} variant={'outlined'} href={PATH_PAGE.login}>
              Back to log in
            </Button>
          </Stack>
        </FormProvider>
      </form>
    </>
  )
}
