import { Box, Typography } from '@mui/material'
import { NewPasswordForm } from 'features/session/new-password'

const NewPassword = () => {
  return (
    <>
      <Box maxWidth={560}>
        <Typography variant='h1' component='h1' mb={8} textAlign={'center'} fontSize={48}>
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
