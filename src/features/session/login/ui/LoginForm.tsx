'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { ButtonForm, Form, InputForm } from 'shared/ui'
import classNames from 'classnames'
import { LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { PATH_PAGE } from 'shared/lib'
import { useLoginMutation } from 'entities/session/api/session.api'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Props = {
  className?: string
}

export function LoginForm(props: Props) {
  // const [loginThunk] = useLoginMutation()
  // const isAuth = useSelector(selectIsAuth)
  const router = useRouter()

  const onSubmitHandler = useCallback(
    async (data: LoginFormSchema) => {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (res && !res.error) {
        router.push('/admin')
      } else {
        console.log(res)
      }
      // await loginThunk(data).unwrap()
      notifySuccess('You have successfully logged in')
    },
    [props]
  )

  return (
    <>
      <Form<LoginFormSchema>
        onSubmit={onSubmitHandler}
        validationSchema={loginFormSchema}
        // defaultValues={{ email: 'login@gmail.com', password: '12345678' }}
        className={classNames(props.className)}
      >
        <InputForm<LoginFormSchema> type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
        <InputForm<LoginFormSchema> type='password' name='password' label='Password' placeholder='Create password' />
        <div className='form__link form__link--forgot'>
          <Link href={PATH_PAGE.resetPassword} className='text-link text-primary'>
            Forgot Password?
          </Link>
        </div>
        <ButtonForm className='form__button' lgWidth>
          Log In
        </ButtonForm>
        <div className='form__link'>
          Don’t have an account? &nbsp;
          <Link href={PATH_PAGE.register} className='text-link text-primary'>
            Sign Up
          </Link>
        </div>
      </Form>
    </>
  )
}
