import { Chart } from './Chart'
import { Container, Typography } from '@mui/material'
import { Items } from './Items'
import { Section } from 'shared/ui'

export default function AdminPage() {
  return (
    <>
      <Section mb={0} pb={0}>
        <Container>
          <Typography variant='h1' component='h1' mb={4}>
            overview
          </Typography>
          <Chart />
        </Container>
      </Section>
      <Section pt={15}>
        <Container>
          <Items />
        </Container>
      </Section>
    </>
  )
}
