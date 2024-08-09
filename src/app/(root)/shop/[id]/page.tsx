import { NTFForm } from 'widgets/NTFForm/NTFForm'
import { NTFParameters } from 'widgets/NTFParameters/NTFParameters'
import { NTFDetails } from 'widgets/NTFDetails/NTFDetails'
import { Box, Container, Grid } from '@mui/material'

const color = 'bg-mystic'

const Shop = () => {
  return (
    <Box component='section' className='section'>
      <Container>
        <Grid container spacing={12} className='row'>
          <Grid item lg={4} md={9} xs={12} marginX={'auto'}>
            <NTFParameters bgClass={color} />
          </Grid>
          <Grid item lg={4} md={6} xs={12} sx={{ order: { lg: -1, xs: 0 } }}>
            <NTFDetails bgClass={color} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <NTFForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Shop
