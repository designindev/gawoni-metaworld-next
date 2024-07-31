import { Box, Container } from '@mui/material'
import { ShopFilter } from './ShopFilter'

const Shop = () => {
  return (
    <Box component='section' className='section'>
      <Container>
        <h1 className='h1 section__heading text-center'>NFT Shop</h1>
        <ShopFilter />
      </Container>
    </Box>
  )
}

export default Shop
