'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { ButtonForm, Form, InputForm } from 'shared/ui'
import classNames from 'classnames'
import { RegisterFormSchema, registerFormSchema } from '../model/register-form.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRegisterMutation } from 'entities/session/api/session.api'
import Link from 'next/link'

type Props = {
  onComplete?: () => void
  className?: string
}

export const RegisterForm = (props: Props) => {
  const [register] = useRegisterMutation()

  const onSubmitHandler = useCallback(
    async (data: RegisterFormSchema) => {
      await register(data).unwrap()
      props.onComplete && props.onComplete()
      notifySuccess('You have successfully registered')
    },
    [props, register]
  )

  return (
    <>
      <Form<RegisterFormSchema>
        onSubmit={onSubmitHandler}
        validationSchema={registerFormSchema}
        // defaultValues={{ email: 'login@gmail.com', password: '12345678', passwordConfirm: '12345678' }}
        className={classNames('', props.className)}
      >
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='text' name='email' label='Username' placeholder='Enter your username' />
          </div>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='text' name='email' label='Email' placeholder='Enter your email' />
          </div>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='password' name='password' label='Password' placeholder='Create password' />
          </div>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='password' name='passwordConfirm' label='Confirm password' placeholder='Confirm password' />
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
