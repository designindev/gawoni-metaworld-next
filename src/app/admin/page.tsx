import { Chart } from './Chart'
import { Filter } from 'widgets/filter/Filter'
import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add'
import { PATH_PAGE } from 'shared/lib'

export default function AdminPage() {
  return (
    <>
      <Box component={'section'} className='section' mb={0} sx={{ pb: '0!important' }}>
        <Container>
          <Typography variant='h1' component='h1' mb={4}>
            overview
          </Typography>
          <Chart />
        </Container>
      </Box>
      <Box component='section' className='section' pt={'60px!important'}>
        <Container>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb={8}>
            <Typography variant='h1' component='h2'>
              All NFTs
            </Typography>
            <Button component={Link} href='/admin/new-nft' sx={{ minWidth: { sm: '197px', xs: '1px' } }}>
              <Box display={{ sm: 'inline', xs: 'none' }}>Add New</Box>
              <Box display={{ sm: 'none', xs: 'inline' }}>
                <AddIcon fontSize='large' sx={{ verticalAlign: 'middle' }} />
              </Box>
            </Button>
          </Stack>
          <Filter count={3} bg />
          <Grid container spacing={{ xs: 6, lg: 10 }}>
            {mockItems.map((item, i) => {
              return (
                <Grid item key={i} xl={3} lg={4} sm={6} xs={12}>
                  <NftCard nft={item} link={PATH_PAGE.shop.slug(item.id)} hasButtons />
                </Grid>
              )
            })}
          </Grid>
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Button size='large' sx={{ maxWidth: '453px', width: '100%' }}>
              Load More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
