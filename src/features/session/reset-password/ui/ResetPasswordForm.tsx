'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { Button, ButtonForm, Form, InputForm } from 'shared/ui'
import classNames from 'classnames'
import { ResetPasswordformSchema, resetPasswordFormSchema } from '../model/reset-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRouter } from 'next/navigation'

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
