import { Box, Container, Typography } from '@mui/material'
import { ShopFilter } from './ShopFilter'

const Shop = async () => {
  const nfts = await (await fetch('http://localhost:8088/api/nfts/')).json()

  return (
    <Box component='section' className='section'>
      <Container>
        <Typography variant={'h1'} component={'h1'} sx={{ textAlign: 'center' }}>
          NFT Shop
        </Typography>
        <ShopFilter items={nfts} />
      </Container>
    </Box>
  )
}

export default Shop
