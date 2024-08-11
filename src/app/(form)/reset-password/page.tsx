import { Box, Typography } from '@mui/material'
import { ResetPasswordForm } from 'features/session/reset-password'

const ResetPassword = () => {
  return (
    <>
      <Box maxWidth={560} width={'100%'}>
        <Typography variant='h2' component='h1' textAlign={'center'} mb={8}>
          Password reset
        </Typography>
        <Typography variant='body1' textAlign={'center'} mb={{ lg: 18, xs: 12 }}>
          Enter the email you used to create your account so we can send you a link for resetting your password
        </Typography>
        <ResetPasswordForm />
      </Box>
    </>
  )
}

export default ResetPassword
