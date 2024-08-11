import { Box, CircularProgress, Container } from '@mui/material'
import { Section } from 'shared/ui'

export default function Loading() {
  return (
    <>
      {/* TODO: MOVE TO SHARED/UI  */}
      <Section>
        <Container sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Container>
      </Section>
    </>
  )
}
