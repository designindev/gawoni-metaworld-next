import { Box, Container, Grid } from '@mui/material'
import { Section } from 'shared/ui'
import { NftImage, NftForm, NftDetails, NftParameters } from 'widgets'

const Shop = () => {
  return (
    <Section>
      <Container>
        <Grid container spacing={12}>
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
    </Section>
  )
}

export default Shop
