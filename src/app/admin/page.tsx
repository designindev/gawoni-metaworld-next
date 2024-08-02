import LineChart from './LineChart'
import { Filter } from 'widgets/filter/Filter'
import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'

export default function AdminPage() {
  return (
    <>
      <Box component={'section'} className='section' mb={0}>
        <Container>
          <Typography variant='h1' component='h1'>
            overview
          </Typography>
          <LineChart />
        </Container>
      </Box>
      <Box component='section' className='section'>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 8 }}>
            <Typography variant='h1' component='h2' mb={0}>
              All NFTs
            </Typography>
            <Button component={Link} href='/admin/new-nft'>
              Add New
            </Button>
          </Box>
          <Filter count={3} bg />
          <Grid container spacing={{ xs: 6, lg: 10 }}>
            {mockItems.map((item, i) => {
              return (
                <Grid item key={i} xl={3} lg={4} sm={6}>
                  <NftCard nft={item} />
                </Grid>
              )
            })}
          </Grid>
          <Box sx={{ mt: 14, textAlign: 'center' }}>
            <Button>Load More</Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
