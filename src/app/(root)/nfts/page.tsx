import { Box, Container, Typography } from '@mui/material'
import { NftsFilter } from './NftsFilter'
import { Section } from 'shared/ui'

const Nfts = async () => {
  return (
    <Section>
      <Container>
        <Typography variant={'h1'} component={'h1'} sx={{ textAlign: 'center' }}>
          NFT Shop
        </Typography>
        <NftsFilter />
      </Container>
    </Section>
  )
}

export default Nfts
