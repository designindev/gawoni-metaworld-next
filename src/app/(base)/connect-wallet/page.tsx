import { Box, Container } from '@mui/material'

const ConnectWallet = () => {
  return (
    <Box component={'section'} className='section'>
      <Container>
        <Box component={'h1'} className='h1 section__heading' sx={{ textAlign: 'center' }}>
          Connect wallet
        </Box>
      </Container>
    </Box>
  )
}

export default ConnectWallet
