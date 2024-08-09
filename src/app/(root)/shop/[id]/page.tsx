import { Box, Container, Grid } from '@mui/material'
import { NftImage, NftForm, NftDetails, NftParameters } from 'widgets'

const Shop = () => {
  return (
    <Box component='section' className='section'>
      <Container>
        <Grid container spacing={12} className='row'>
          <Grid item lg={4} md={9} xs={12} marginX={'auto'}>
            <NftImage />
            <NftForm />
          </Grid>
          <Grid item lg={4} md={6} xs={12} sx={{ order: { lg: -1, xs: 0 } }}>
            <NftDetails />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <NftParameters />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Shop
