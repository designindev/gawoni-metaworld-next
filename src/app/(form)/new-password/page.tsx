import { Box, Typography } from '@mui/material'
import { NewPasswordForm } from 'features/session/new-password'

const NewPassword = () => {
  return (
    <>
      <Box maxWidth={560}>
        <Typography variant='h2' component='h1' textAlign={'center'} mb={8}>
          reset password
        </Typography>
        <Typography variant='body1' textAlign={'center'} mb={{ lg: 18, xs: 12 }}>
          Create a new password for your account
        </Typography>
        <NewPasswordForm />
      </Box>
    </>
  )
}

export default NewPassword
