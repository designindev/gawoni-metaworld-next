'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback, useState } from 'react'
import { defaultValues, RegisterFormSchema, registerFormSchema } from '../model/register-form.schema'
import { PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { country } from '../model/country'
import { Box, Button, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput, ControlledSelect } from 'shared/ui'
import { authenticate, useRegisterMutation } from 'entities/session'
import { useDispatch } from 'react-redux'

export const RegisterForm = () => {
  const [registerMutation] = useRegisterMutation()
  const dispatch = useDispatch()
  const [serverError, setServerError] = useState('')
  const router = useRouter()
  const methods = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    criteriaMode: 'all',
    defaultValues:  {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      country: '',
      age: '',
    },
  })

  const onSubmitHandler = useCallback(
    async (data: RegisterFormSchema) => {
      try {
        await registerMutation({
          name: data.username,
          email: data.email,
          password: data.password,
          password_confirmation: data.passwordConfirm,
          country: data.country,
          age_confirmation: true,
        }).unwrap()
        dispatch(authenticate({ name: data.username, isAdmin: false }))
        router.push(PATH_PAGE.adminPanel.root)
        notifySuccess('You have successfully registered')
      } catch (e: any) {
        setServerError(e.data.message)
      }
    },
    [router, dispatch, registerMutation]
  )

  return (
    <>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormProvider {...methods}>
          <Grid container rowSpacing={8} columnSpacing={{ lg: 10, xs: 6 }}>
            <Grid item sm={6} xs={12}>
              <ControlledInput<RegisterFormSchema>
                name='username'
                label='Username'
                placeholder='Enter your username'
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ControlledInput<RegisterFormSchema>
                name='email'
                label='Email'
                placeholder='Enter your email'
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ControlledSelect<RegisterFormSchema>
                name={'country'}
                label='Country'
                placeholder='Select your country'
                options={country}
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ControlledInput<RegisterFormSchema> name='age' label='Age' placeholder='Enter your age' fullWidth />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ControlledInput<RegisterFormSchema>
                name='password'
                type='password'
                label='Password'
                placeholder='Create password'
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ControlledInput<RegisterFormSchema>
                name='passwordConfirm'
                type='password'
                label='Confirm password'
                placeholder='Confirm password'
                fullWidth
              />
            </Grid>
          </Grid>
          <Box color={'error.main'} mt={3}>
            {serverError}
          </Box>
          <Box textAlign={'center'} mt={13}>
            <Button type={'submit'} sx={{ maxWidth: '336px', width: '100%' }}>
              Create account
            </Button>
            <Box mt={18}>
              Already have an account? &nbsp;
              <Box component={Link} href={PATH_PAGE.login} color={'primary.main'} sx={{ textDecoration: 'underline' }}>
                Log In
              </Box>
            </Box>
          </Box>
        </FormProvider>
      </form>
    </>
  )
}
