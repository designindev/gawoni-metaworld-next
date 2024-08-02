import { Box, Typography } from '@mui/material'
import { RegisterForm } from 'features/session/register'

const Register = () => {
  return (
    <Box>
      <Typography variant='h1' component='h1' mb={{ lg: 8, xs: 2 }} textAlign={'center'} fontSize={48}>
        welcome!
      </Typography>
      <Typography variant='body1' textAlign={'center'} mb={{ lg: 18, xs: 12 }}>
        If you’re here for the first time, please create your account below
      </Typography>
      <RegisterForm />
    </Box>
  )
}

export default Register
