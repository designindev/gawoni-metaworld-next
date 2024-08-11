import { Box, Container, Typography } from '@mui/material'
import { ShopFilter } from './ShopFilter'
import { Section } from 'shared/ui'

const Shop = async () => {
  return (
    <Section>
      <Container>
        <Typography variant={'h1'} component={'h1'} sx={{ textAlign: 'center' }}>
          NFT Shop
        </Typography>
        <ShopFilter />
      </Container>
    </Section>
  )
}

export default Shop
