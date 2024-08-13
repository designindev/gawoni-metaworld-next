'use client'

import { notifyError, notifySuccess } from 'shared/lib/notify'
import { useCallback, useState } from 'react'
import { LoginFormSchema, loginFormSchema } from '../model/login-form.schema'
import { config, PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Box, Button, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from 'shared/ui'
import axios from 'axios'
import { useLoginMutation } from 'entities/session/api/session.api'
import { useDispatch } from 'react-redux'
import { authenticate } from 'entities/session/model/session.slice'

type Props = {
  className?: string
}

export function LoginForm(props: Props) {
  const [loginMutation] = useLoginMutation()
  const dispatch = useDispatch()
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

  const onSubmitHandler = useCallback(
    async (data: LoginFormSchema) => {
      setServerError('')
      // const response = (await axios.get(config.SITE_ENDPOINT + '/sanctum/csrf-cookie')).data
      try {
        const { name, admin } = await loginMutation({
          email: data.email,
          password: data.password,
        }).unwrap()
        dispatch(authenticate({ name, isAdmin: admin }))
        router.push(PATH_PAGE.adminPanel.root)
        notifySuccess('You have successfully logged in')
      } catch (e: any) {
        setServerError(e.data.message)
      }
    },
    [router, dispatch, loginMutation]
  )

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
