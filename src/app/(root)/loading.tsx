import { CircularProgress, Container } from '@mui/material'
import { Section } from 'shared/ui'

export default function Loading() {
  return (
    <>
      <Section>
        <Container sx={{ textAlign: 'center' }}>
          <CircularProgress />
        </Container>
      </Section>
    </>
  )
}
