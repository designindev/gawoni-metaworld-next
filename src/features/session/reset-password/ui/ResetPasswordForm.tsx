'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { ButtonForm, Form, InputForm } from 'shared/ui'
import classNames from 'classnames'
import { ResetPasswordformSchema, resetPasswordFormSchema } from '../model/reset-password.schema'
import { PATH_PAGE } from 'shared/lib'
import { useResetPasswordMutation } from 'entities/session/api/session.api'
import Link from 'next/link'

type Props = {
  onComplete?: () => void
  className?: string
}

export const ResetPasswordForm = (props: Props) => {
  const [resetPassword] = useResetPasswordMutation()

  const onSubmitHandler = useCallback(
    async (data: ResetPasswordformSchema) => {
      await resetPassword(data).unwrap()
      props.onComplete && props.onComplete()
      notifySuccess('You have successfully registered')
    },
    [props, resetPassword]
  )

  return (
    <>
      <Form<ResetPasswordformSchema>
        onSubmit={onSubmitHandler}
        validationSchema={resetPasswordFormSchema}
        // defaultValues={{ email: 'login@gmail.com', }}
        className={classNames('', props.className)}
      >
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <InputForm<ResetPasswordformSchema> type='text' name='email' label='Username' placeholder='Enter your username' />
          </div>
        </div>
        <ButtonForm>Create account</ButtonForm>
        <div className='form__link'>
          Already have an account? &nbsp;
          <Link href={PATH_PAGE.login} className='text-link text-primary'>
            Log In
          </Link>
        </div>
      </Form>
    </>
  )
}
