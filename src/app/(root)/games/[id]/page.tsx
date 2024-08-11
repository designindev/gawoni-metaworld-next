import { GameSlider } from './GameSlider'
import { slides } from './slides'
import { Container, Box, Stack } from '@mui/material'
import { GameInfo } from './GameInfo'
import { GameBanner } from './GameBanner'
import { GameFeature } from './GameFuature'
import { Section } from 'shared/ui'

const Games = () => {
  return (
    <Section>
      <Box
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        sx={{
          background: 'linear-gradient(180deg, #3c453c 0%, #000000 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
            background: 'center / cover no-repeat',
            backgroundImage: 'url(/images/bg/asfalt-light.png)',
          },
        }}
      ></Box>
      <Container>
        <Stack spacing={{ lg: 18, xs: 6 }}>
          <Stack spacing={10}>
            {/* // TODO: MOVE TO WIDGETS  */}
            <GameSlider slides={slides} />
            <GameInfo />
          </Stack>
          <GameFeature />
          <GameBanner />
        </Stack>
      </Container>
    </Section>
  )
}

export default Games
