'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { ButtonForm, Form, InputForm, RadioGroupForm, Select, SelectForm } from 'shared/ui'
import classNames from 'classnames'
import { RegisterFormSchema, registerFormSchema } from '../model/register-form.schema'
import { PATH_PAGE } from 'shared/lib'
import { useRegisterMutation } from 'entities/session/api/session.api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { country } from '../model/country'

type Props = {
  className?: string
}

export const RegisterForm = (props: Props) => {
  const [register] = useRegisterMutation()
  const router = useRouter()

  const onSubmitHandler = useCallback(
    async (data: RegisterFormSchema) => {
      // await register(data).unwrap()
      console.log(data)
      return
      router.push(PATH_PAGE.login)
      notifySuccess('You have successfully registered')
    },
    [props]
  )

  return (
    <>
      <Form<RegisterFormSchema>
        onSubmit={onSubmitHandler}
        validationSchema={registerFormSchema}
        defaultValues={{ username: 'username', email: 'login@gmail.com', password: '12345678', passwordConfirm: '12345678' }}
        className={classNames('', props.className)}
      >
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='text' name='username' label='Username' placeholder='Enter your username' />
          </div>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='text' name='email' label='Email' placeholder='Enter your email' />
          </div>
          <div className='col-lg-6 col-12'>
            <SelectForm<RegisterFormSchema> name='country' label='Country' options={country} />
          </div>
          <div className='col-lg-6 col-12'></div>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='password' name='password' label='Password' placeholder='Create password' />
          </div>
          <div className='col-lg-6 col-12'>
            <InputForm<RegisterFormSchema> type='password' name='passwordConfirm' label='Confirm password' placeholder='Confirm password' />
          </div>
        </div>
        <ButtonForm lgWidth>Create account</ButtonForm>
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
