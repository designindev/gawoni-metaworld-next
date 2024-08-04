import { GameSlider } from './GameSlider'
import { slides } from './slides'
import { Container, Box, Grid, Typography, Stack } from '@mui/material'
import { GameInfo } from './GameInfo'
import { GameBanner } from './GameBanner'
import { GameFeature } from './GameFuature'

const Games = () => {
  return (
    <Box component='section' className='section'>
      <div className='section__bg section__bg--gradient'></div>
      <Container>
        <Stack spacing={{ lg: 18, xs: 6 }}>
          <Stack spacing={10}>
            <GameSlider slides={slides} />
            <GameInfo />
          </Stack>
          <GameFeature />
          <GameBanner />
        </Stack>
      </Container>
    </Box>
  )
}

export default Games
