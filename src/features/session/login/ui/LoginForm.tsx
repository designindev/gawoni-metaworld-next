'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useFormState } from 'react-dom'
import { useActionState, useCallback, useEffect, useState } from 'react'
import { defaultValues, LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { config, PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Box, Button, Stack, Link as LinkMui } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from 'shared/ui'
import { login } from 'lib/actions/user.actions'

export function LoginForm() {
  const [state, formAction, pending] = useFormState(login, { message: '' })
  const router = useRouter()
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (state.message === 'ok') {
      notifySuccess('You have successfully logged in')
      router.push(PATH_PAGE.login)
    }
  }, [state, router])

  return (
    <>
      <form onSubmit={methods.handleSubmit(formAction)}>
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
          {(state.message !== 'ok' || pending === false) && <Box color={'error.main'}>{state.message}</Box>}
          <Box textAlign={'center'} mt={13}>
            <Button type={'submit'} sx={{ maxWidth: '336px', width: '100%' }} disabled={pending}>
              {pending ? 'Submitting...' : 'Log In'}
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
