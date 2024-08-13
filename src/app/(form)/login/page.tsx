import { Box, Typography } from '@mui/material'
import { LoginForm } from 'features/session/login'
import { getNft, getNfts } from 'lib/actions/nft.actions'
import { wait } from 'shared/lib'

const LoginPage = async () => {
  const nft = await getNfts()

  await wait(2000)
  return (
    <Box maxWidth={560} width={'100%'}>
      <Typography variant='h2' component='h1' textAlign={'center'} mb={{ lg: 21, xs: 8 }}>
        welcome back!
      </Typography>
      <LoginForm />
    </Box>
  )
}

export default LoginPage
