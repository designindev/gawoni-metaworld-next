import { PATH_PAGE } from 'shared/lib'
import Email from './Email'
import { Suspense } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const CheckEmail = () => {
  return (
    <>
      <Box maxWidth={560} width={'100%'}>
        <Typography variant='h1' component='h1' mb={8} textAlign={'center'} fontSize={48}>
          Check your email
        </Typography>
        <Typography variant='body1' textAlign={'center'} mb={{ lg: 18, xs: 12 }}>
          <Suspense fallback={<></>}>
            <Email />
          </Suspense>
        </Typography>
        <Stack spacing={6} alignItems={'center'}>
          <Button component={Link} href={PATH_PAGE.resetPassword} sx={{ maxWidth: 336, width: '100%' }}>
            Resend email
          </Button>
          <Button
            component={Link}
            href={PATH_PAGE.login}
            color={'white'}
            variant='outlined'
            sx={{ maxWidth: 336, width: '100%' }}
          >
            Back to log in
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default CheckEmail
