import { Chart } from './Chart'
import { mockItems } from 'entities/nft/api/items'
import { Box, Container, Typography } from '@mui/material'
import { Items } from './Items'

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
          <Items />
        </Container>
      </Box>
    </>
  )
}
