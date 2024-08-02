'use client'

import { notifyError, notifySuccess } from 'shared/lib/notify'
import { useCallback, useState } from 'react'
import { LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Box, Button, Stack, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  className?: string
}

export function LoginForm(props: Props) {
  const router = useRouter()
  const { control, handleSubmit } = useForm<LoginFormSchema>({
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
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={9}>
          <Controller
            name={'emailOrLogin'}
            control={control}
            render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
              <TextField
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                inputRef={ref}
                value={value}
                fullWidth
                label='Username or email'
                placeholder='Enter your username or email'
              />
            )}
          />
          <Controller
            name={'password'}
            control={control}
            render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
              <TextField
                type={'password'}
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                inputRef={ref}
                value={value}
                fullWidth
                label='Password'
                placeholder='Create password'
              />
            )}
          />
        </Stack>
        <Box textAlign={'right'} mt={4}>
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
            <Box component={Link} href={PATH_PAGE.register} color={'primary.main'} sx={{ textDecoration: 'underline' }}>
              Sign Up
            </Box>
          </Box>
        </Box>
      </form>
    </>
  )
}
