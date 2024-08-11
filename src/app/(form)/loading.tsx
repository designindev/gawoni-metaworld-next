import { CircularProgress, Container } from '@mui/material'
import { Section } from 'shared/ui'

export default function Loading() {
  return (
    <Section width={'100%'}>
      <Container sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    </Section>
  )
}
