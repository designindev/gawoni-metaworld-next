'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { Form, InputForm } from 'shared/ui'
import { ResetPasswordformSchema, resetPasswordFormSchema } from '../model/reset-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRouter } from 'next/navigation'
import { Button, Stack } from '@mui/material'

export const ResetPasswordForm = () => {
  const router = useRouter()

  const onSubmitHandler = useCallback(
    async (data: ResetPasswordformSchema) => {
      router.push(`${PATH_PAGE.checkEmail}?email=${data.email}`)
      notifySuccess('You have successfully reseted password')
    },
    [router]
  )

  return (
    <>
      <Form<ResetPasswordformSchema> onSubmit={onSubmitHandler} validationSchema={resetPasswordFormSchema}>
        <InputForm<ResetPasswordformSchema>
          type='email'
          name='email'
          label='Enter your email'
          placeholder='Enter your email'
        />
        <Stack alignItems={'center'} spacing={6} mt={6}>
          <Button fullWidth>Send</Button>
          <Button color={'white'} variant={'outlined'} href={PATH_PAGE.login} fullWidth>
            Back to log in
          </Button>
        </Stack>
      </Form>
    </>
  )
}
