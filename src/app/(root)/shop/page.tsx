import { Box, Container, Typography } from '@mui/material'
import { ShopFilter } from './ShopFilter'

const Shop = async () => {
  return (
    <Box component='section' className='section'>
      <Container>
        <Typography variant={'h1'} component={'h1'} sx={{ textAlign: 'center' }}>
          NFT Shop
        </Typography>
        <ShopFilter />
      </Container>
    </Box>
  )
}

export default Shop
