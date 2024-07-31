import { Box, Container } from '@mui/material'
import { Preloader } from 'shared/ui'

export default function Loading() {
  return (
    <>
      <Box component='section' className='section'>
        <Container>
          <Preloader />
        </Container>
      </Box>
    </>
  )
}
