'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { ControlledInput } from 'shared/ui'
import { NewPasswordFormSchema, newPasswordFormSchema } from '../model/new-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRouter } from 'next/navigation'
import { Button, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const NewPasswordForm = () => {
  const router = useRouter()
  const methods = useForm<NewPasswordFormSchema>({
    resolver: zodResolver(newPasswordFormSchema),
    criteriaMode: 'all',
    defaultValues: { password: '', passwordConfirm: '' },
  })

  const handleSubmit = useCallback(
    async (data: NewPasswordFormSchema) => {
      // TODO: ADD LOGIC
      router.push(PATH_PAGE.passwordResetSuccess)
      notifySuccess('You have successfully updated password')
    },
    [router]
  )

  return (
    <>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <FormProvider {...methods}>
          <Stack spacing={6}>
            <ControlledInput<NewPasswordFormSchema>
              type='password'
              name='password'
              label='Password'
              placeholder='Create password'
              fullWidth
            />
            <ControlledInput<NewPasswordFormSchema>
              type='password'
              name='passwordConfirm'
              label='Confirm password'
              placeholder='Confirm password'
              fullWidth
            />
          </Stack>
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
