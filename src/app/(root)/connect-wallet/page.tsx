import { Container, Typography } from '@mui/material'
import { Section } from 'shared/ui'

const ConnectWallet = () => {
  return (
    <Section>
      <Container>
        <Typography variant={'h1'} component={'h1'} sx={{ textAlign: 'center' }}>
          Connect wallet
        </Typography>
      </Container>
    </Section>
  )
}

export default ConnectWallet
