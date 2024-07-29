'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { Button, ButtonForm, Form, InputForm } from 'shared/ui'
import classNames from 'classnames'
import { NewPasswordFormSchema, newPasswordFormSchema } from '../model/new-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useNewPasswordMutation, useResetPasswordMutation } from 'entities/session/api/session.api'
import { useRouter } from 'next/navigation'

type Props = {
  className?: string
}

export const NewPasswordForm = (props: Props) => {
  const [newPassword] = useNewPasswordMutation()
  const router = useRouter()

  const onSubmitHandler = useCallback(
    async (data: NewPasswordFormSchema) => {
      // await resetPassword(data).unwrap()
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
        defaultValues={{ password: '12345678', passwordConfirm: '12345678' }}
        className={classNames('', props.className)}
      >
        <InputForm<NewPasswordFormSchema> type='password' name='password' label='Password' placeholder='Create password' />
        <InputForm<NewPasswordFormSchema> type='password' name='passwordConfirm' label='Confirm password' placeholder='Confirm password' />

        <div className='form__buttons'>
          <ButtonForm lgWidth>Send</ButtonForm>
          <Button href={PATH_PAGE.login} color={'light'} lgWidth border>
            Back to log in
          </Button>
        </div>
      </Form>
    </>
  )
}
