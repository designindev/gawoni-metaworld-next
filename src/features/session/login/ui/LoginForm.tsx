'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback, useState } from 'react'
import { defaultValues, LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Box, Button, Stack, Link as LinkMui } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from 'shared/ui'
import { login } from 'lib/actions/user.actions'

export function LoginForm() {
  const [serverError, setServerError] = useState('')
  const router = useRouter()
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmitHandler = useCallback(async (data: LoginFormSchema) => {
    setServerError('')
    try {
      await login(data)
      notifySuccess('You have successfully logged in')
      router.push(PATH_PAGE.login)
    } catch (e: any) {
      setServerError(e.data.message)
    }
  }, [])

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormProvider {...methods}>
          <Stack spacing={9}>
            <ControlledInput<LoginFormSchema>
              name='email'
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
            <LinkMui component={Link} href={PATH_PAGE.resetPassword} underline='always'>
              Forgot Password?
            </LinkMui>
          </Box>
          <Box color={'error.main'}>{serverError}</Box>
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
