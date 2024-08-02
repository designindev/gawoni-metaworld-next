import { Box, CircularProgress, Container } from '@mui/material'

export default function Loading() {
  return (
    <Box component='section' className='section' width={'100%'}>
      <Container sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    </Box>
  )
}
