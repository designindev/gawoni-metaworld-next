import { Container, Grid } from '@mui/material'
import { getNft } from 'lib/actions/nft.actions'
import { Section } from 'shared/ui'
import { NftDetails, NftForm, NftImage, NftParameters } from 'widgets'

const Nft = async ({ params }: { params: { id: string } }) => {
  const response = await getNft({ nftId: params.id })
  const { item: nft } = response

  return (
    <Section>
      <Container>
        <p>Post: {params.id}</p>
        <Grid container spacing={12}>
          <Grid item lg={4} md={9} xs={12} marginX={'auto'}>
            <NftImage nft={nft} />
            <NftForm nft={nft} />
          </Grid>
          <Grid item lg={4} md={6} xs={12} sx={{ order: { lg: -1, xs: 0 } }}>
            <NftDetails nft={nft} />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <NftParameters nft={nft} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default Nft
