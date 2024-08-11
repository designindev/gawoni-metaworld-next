import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { PATH_PAGE } from 'shared/lib'

const PasswordResetSuccess = () => {
  return (
    <>
      <Box textAlign={'center'}>
        <Typography variant='h2' component='h1' textAlign={'center'} mb={{ lg: 8, xs: 2 }}>
          Password reset successfully!
        </Typography>
        <Button component={Link} href={PATH_PAGE.login} sx={{ maxWidth: '336px', width: '100%' }}>
          Create account
        </Button>
      </Box>
    </>
  )
}

export default PasswordResetSuccess
