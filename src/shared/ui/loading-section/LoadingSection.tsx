import React from 'react'
import { Section } from '../section/Section'
import { CircularProgress, Container } from '@mui/material'

export const LoadingSection = () => {
  return (
    <Section>
      <Container sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    </Section>
  )
}
