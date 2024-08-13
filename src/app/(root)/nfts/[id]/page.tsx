'use client'

import { Box, CircularProgress, Container, Grid } from '@mui/material'
import { useFetchNftQuery } from 'entities/nft'
import { useParams } from 'next/navigation'
import { LoadingSection, Section } from 'shared/ui'
import { NftImage, NftForm, NftDetails, NftParameters } from 'widgets'

const Nft = () => {
  const { id } = useParams() as { id: string }
  const nftState = useFetchNftQuery({ nftId: id })

  if (nftState.isLoading) return <LoadingSection />

  if (!nftState.isSuccess) return <div>Error</div>

  const { data: nft } = nftState

  return (
    <Section>
      <Container>
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
