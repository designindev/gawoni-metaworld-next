'use client'

import { notifyError, notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Box, Button, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from 'shared/ui'

type Props = {
  className?: string
}

export function LoginForm(props: Props) {
  const router = useRouter()
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    criteriaMode: 'all',
    defaultValues: {
      emailOrLogin: '',
      password: '',
    },
  })

  const onSubmitHandler = useCallback(
    async (data: LoginFormSchema) => {
      const res = await signIn('credentials', {
        emailOrLogin: data.emailOrLogin,
        password: data.password,
        redirect: false,
      })

      const success = res && !res.error

      if (success) {
        router.push('/admin')
        notifySuccess('You have successfully logged in')
      } else {
        notifyError('Email, login or password is incorrect')
      }
    },
    [router]
  )

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormProvider {...methods}>
          <Stack spacing={9}>
            <ControlledInput<LoginFormSchema>
              name='emailOrLogin'
              label='Username or email'
              placeholder='Enter your username or email'
              fullWidth
            />
            <ControlledInput<LoginFormSchema>
              name='password'
              type='password'
              label='Password'
              placeholder='Create password'
              fullWidth
            />
          </Stack>
          <Box textAlign={'right'} mt={4}>
            {/* // TODO: CREATE LINK COMPONENT  */}
            <Box
              component={Link}
              href={PATH_PAGE.resetPassword}
              color={'primary.main'}
              sx={{ textDecoration: 'underline' }}
            >
              Forgot Password?
            </Box>
          </Box>
          <Box textAlign={'center'} mt={13}>
            <Button type={'submit'} sx={{ maxWidth: '336px', width: '100%' }}>
              Log In
            </Button>
            <Box mt={18}>
              Don’t have an account? &nbsp;
              <Box
                component={Link}
                href={PATH_PAGE.register}
                color={'primary.main'}
                sx={{ textDecoration: 'underline' }}
              >
                Sign Up
              </Box>
            </Box>
          </Box>
        </FormProvider>
      </form>
    </>
  )
}
