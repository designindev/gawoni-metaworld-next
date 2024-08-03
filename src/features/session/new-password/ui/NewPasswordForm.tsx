'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { Form, InputForm } from 'shared/ui'
import classNames from 'classnames'
import { NewPasswordFormSchema, newPasswordFormSchema } from '../model/new-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRouter } from 'next/navigation'
import { Button, Stack } from '@mui/material'

type Props = {
  className?: string
}

export const NewPasswordForm = (props: Props) => {
  const router = useRouter()

  const onSubmitHandler = useCallback(
    async (data: NewPasswordFormSchema) => {
      router.push(PATH_PAGE.passwordResetSuccess)
      notifySuccess('You have successfully updated password')
    },
    [router]
  )

  return (
    <>
      <Form<NewPasswordFormSchema>
        onSubmit={onSubmitHandler}
        validationSchema={newPasswordFormSchema}
        // defaultValues={{ password: '12345678', passwordConfirm: '12345678' }}
        className={classNames('', props.className)}
      >
        <InputForm<NewPasswordFormSchema>
          type='password'
          name='password'
          label='Password'
          placeholder='Create password'
        />
        <InputForm<NewPasswordFormSchema>
          type='password'
          name='passwordConfirm'
          label='Confirm password'
          placeholder='Confirm password'
        />
        <Stack alignItems={'center'} spacing={6}>
          <Button>Send</Button>
          <Button color={'white'} variant={'outlined'} href={PATH_PAGE.login} fullWidth>
            Back to log in
          </Button>
        </Stack>
      </Form>
    </>
  )
}
