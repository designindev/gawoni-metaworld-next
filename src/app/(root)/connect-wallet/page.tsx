import { Box, Container, Typography } from '@mui/material'

const ConnectWallet = () => {
  return (
    <Box component={'section'} className='section'>
      <Container>
        <Typography variant={'h1'} component={'h1'} sx={{ textAlign: 'center' }}>
          Connect wallet
        </Typography>
      </Container>
    </Box>
  )
}

export default ConnectWallet
