import { Box, Typography } from '@mui/material'
import { LoginForm } from 'features/session/login'

const LoginPage = async () => {
  return (
    <Box maxWidth={560} width={'100%'}>
      <Typography variant='h1' component='h1' mb={{ lg: 21, xs: 8 }} textAlign={'center'} fontSize={48}>
        welcome back!
      </Typography>
      <LoginForm />
    </Box>
  )
}

export default LoginPage
