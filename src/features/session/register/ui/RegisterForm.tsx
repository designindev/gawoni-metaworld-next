'use client'

import { notifySuccess } from 'shared/lib/notify'
import { useCallback, useId, useState } from 'react'
import { RegisterFormSchema, registerFormSchema } from '../model/register-form.schema'
import { PATH_PAGE } from 'shared/lib'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { country } from '../model/country'
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const RegisterForm = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    criteriaMode: 'all',
    defaultValues: {
      username: '', //'username',
      email: '', //'login@gmail.com',
      password: '', //'12345678',
      passwordConfirm: '', //'12345678',
      country: '', //country[0].value,
      age: '', // '10,
    },
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
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container rowSpacing={8} columnSpacing={{ lg: 10, xs: 6 }}>
          <Grid item sm={6} xs={12}>
            <Controller
              name={'username'}
              control={control}
              render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
                <TextField
                  helperText={error ? error.message : null}
                  error={!!error}
                  onChange={onChange}
                  inputRef={ref}
                  value={value}
                  label='Username'
                  placeholder='Enter your username'
                />
              )}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Controller
              name={'email'}
              control={control}
              render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
                <TextField
                  helperText={error ? error.message : null}
                  error={!!error}
                  onChange={onChange}
                  inputRef={ref}
                  value={value}
                  label='Email'
                  placeholder='Enter your email'
                />
              )}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Controller
              name='country'
              control={control}
              render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
                <FormControl error={Boolean(error)} fullWidth>
                  <InputLabel id='country'>Country</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='country'
                    label='Age'
                    onChange={onChange}
                    inputRef={ref}
                    value={value}
                    fullWidth
                  >
                    <MenuItem value=''>
                      <em>Select your country</em>
                    </MenuItem>
                    {country.map((el, i) => {
                      return (
                        <MenuItem key={i} value={el.value}>
                          {el.label}
                        </MenuItem>
                      )
                    })}
                  </Select>
                  {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
              )}
              rules={{ required: true }}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Controller
              name={'age'}
              control={control}
              render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
                <TextField
                  type={'number'}
                  helperText={error ? error.message : null}
                  error={!!error}
                  onChange={onChange}
                  inputRef={ref}
                  value={value}
                  fullWidth
                  label='Age'
                  placeholder='Enter your age'
                />
              )}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
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
          </Grid>
          <Grid item sm={6} xs={12}>
            <Controller
              name={'passwordConfirm'}
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
                  label='Confirm password'
                  placeholder='Confirm password'
                />
              )}
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
      </form>
    </>
  )
}
