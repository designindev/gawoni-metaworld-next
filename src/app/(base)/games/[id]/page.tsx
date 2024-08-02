import { Button } from 'shared/ui/button/Button'
import Image from 'next/image'
import { Social } from 'shared/ui'
import { GameSlider } from './GameSlider'
import Logo from 'shared/images/games/logo.png'
import { PATH_PAGE } from 'shared/lib'
import { slides } from './slides'
import { Container, Box, Grid, Typography, Stack } from '@mui/material'
import { GameInfo } from './GameInfo'
import { GameBanner } from './GameBanner'
import { GameFeature } from './GameFuatere'

const Games = () => {
  return (
    <Box component='section' className='section'>
      <div className='section__bg section__bg--gradient'></div>
      <Container>
        <Stack spacing={18}>
          <Stack spacing={10}>
            <GameSlider slides={slides} />
            <Stack
              flexDirection={{ lg: 'row', xs: 'column' }}
              rowGap={6}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box maxWidth={'240px'}>
                <Image src={Logo} alt='' />
              </Box>
              <Box width={'100%'} maxWidth={310}>
                <Button href={PATH_PAGE.download} maxWidth>
                  Play
                </Button>
              </Box>
            </Stack>
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
