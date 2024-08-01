import { Box, CircularProgress, Container } from '@mui/material'

export default function Loading() {
  return (
    <>
      <Box component='section' className='section'>
        <Container>
          <CircularProgress />
        </Container>
      </Box>
    </>
  )
}
