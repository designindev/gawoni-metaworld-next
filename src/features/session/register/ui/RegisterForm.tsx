'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback } from 'react'
import { RegisterFormSchema, registerFormSchema } from '../model/register-form.schema'
import { PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { country } from '../model/country'
import { Box, Button, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput, ControlledSelect } from 'shared/ui'

export const RegisterForm = () => {
  const router = useRouter()
  const methods = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    criteriaMode: 'all',
    defaultValues: { username: '', email: '', password: '', passwordConfirm: '', country: '', age: '' },
  })

  const onSubmitHandler = useCallback(
    async (data: RegisterFormSchema) => {
      router.push(PATH_PAGE.login)
      notifySuccess('You have successfully registered')
    },
    [router]
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
