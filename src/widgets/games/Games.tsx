import Image from 'next/image'
import Image1 from './game-1.jpg'
import Image2 from './game-2.jpg'
import Image3 from './game-3.jpg'
import Image4 from './game-4.jpg'
import { PATH_PAGE } from 'shared/lib'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import InfoOutlined from '@mui/icons-material/Info'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Section, TitleWithIcon } from 'shared/ui'

const items = [
  {
    id: '1',
    src: Image1.src,
    title: 'K 4 rally',
    description:
      'The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024',
  },
  {
    id: '2',
    src: Image2.src,
    title: 'tuk tuk rush',
    description: 'The first game featuring Thailand and its iconic TUK TUK vehicle. Release Q4 2024.',
  },
  {
    id: '3',
    src: Image3.src,
    title: 'Racing game',
    description:
      'Another spectacular blockchain racing game is already in development. We will be announcing more on this shortly.',
  },
  {
    id: '4',
    src: Image4.src,
    title: 'Martial arts game',
    description:
      "You want a spectacular martial arts blockchain game? We're already working on it. It will be the ultimate fighting game. We will be announcing more on this shortly.",
  },
]

export const Games = () => {
  return (
    <Section
      sx={{
        backgroundSize: 'cover',
        backgroundImage: `url(/images/bg/games.png)`,
      }}
    >
      <Container className='games'>
        <Typography variant='h1' component='h2' mb={{ lg: 15, xs: 8 }}>
          <TitleWithIcon>our games</TitleWithIcon>
        </Typography>
        <Grid container spacing={{ xs: 6, lg: 10 }}>
          {items.map((item, i) => {
            return (
              <Grid
                item
                md={6}
                sx={{
                  '&:nth-of-type(3n + 2) .game-title': {
                    color: 'secondary.main',
                  },
                  '&:nth-of-type(3n + 3) .game-title': {
                    color: 'secondary.main',
                  },
                }}
                key={i}
              >
                <Box
                  sx={{
                    position: 'relative',
                    padding: { lg: '25px 25px 50px', xs: '16px 20px 55px' },
                    height: '100%',
                    '&:hover .game-hover--out': {
                      opacity: 0,
                    },
                    '&:hover .game-hover--in': {
                      opacity: 1,
                      visibility: 'visible',
                    },
                    '&:hover .game-button': {
                      transform: 'translate(0, 0)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: '3px solid #fff;',
                      clipPath: {
                        lg: 'polygon(45px 0%, calc(100% - 45px) 0%, 100% 45px, 100% calc(100% - 45px), calc(100% - 45px) 100%, 45px 100%, 0% calc(100% - 45px), 0% 45px)',
                        xs: 'polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0% calc(100% - 30px), 0% 30px)',
                      },
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: { lg: 62, xs: 40 },
                      height: 3,
                      backgroundColor: '#fff',
                      zIndex: 9,
                      top: 0,
                      left: { lg: -18, xs: -10 },
                      transformOrigin: 'top right',
                      transform: 'rotate(-45deg)',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: { lg: 62, xs: 40 },
                      height: 3,
                      backgroundColor: '#fff',
                      zIndex: 9,
                      top: 0,
                      right: { lg: -18, xs: -10 },
                      transformOrigin: 'top left',
                      transform: 'rotate(45deg)',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: { lg: 62, xs: 40 },
                      height: 3,
                      backgroundColor: '#fff',
                      zIndex: 9,
                      bottom: 0,
                      left: { lg: -18, xs: -10 },
                      transformOrigin: 'bottom right',
                      transform: 'rotate(45deg)',
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      width: { lg: 62, xs: 40 },
                      height: 3,
                      backgroundColor: '#fff',
                      zIndex: 9,
                      bottom: 0,
                      right: { lg: -18, xs: -10 },
                      transformOrigin: 'bottom left',
                      transform: 'rotate(-45deg)',
                    }}
                  ></Box>
                  <Box
                    className='game-hover--out'
                    sx={{
                      mb: 7,
                      position: 'relative',
                      transition: 'all .3s',
                      opacity: 1,
                      height: 275,
                      clipPath: {
                        lg: 'polygon(35px 0%, calc(100% - 35px) 0%, 100% 35px, 100% calc(100% - 35px), 100% 100%, 0 100%, 0% 100%, 0% 35px)',
                        xs: 'polygon(25px 0%, calc(100% - 25px) 0%, 100% 25px, 100% calc(100% - 25px), 100% 100%, 0 100%, 0% 100%, 0% 25px)',
                      },
                    }}
                  >
                    <Image
                      src={item.src}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt=''
                    />
                  </Box>
                  <Box
                    className='game-hover--out'
                    sx={{ transition: 'all .3s', opacity: 1, position: 'relative', zIndex: 3 }}
                  >
                    <Typography
                      className='game-title'
                      variant='h2'
                      component='h2'
                      fontWeight={500}
                      color={'primary.main'}
                      textTransform={'uppercase'}
                      fontSize={42}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant='body1' mt={5}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Box
                    className='game-hover--in'
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'opacity 0.3s visibility 0.3s',
                    }}
                  >
                    <Button
                      className='game-button'
                      color='white'
                      variant='outlined'
                      href={PATH_PAGE.games.slug(item.id)}
                      sx={{
                        maxWidth: 300,
                        width: '100%',
                        m: '20px auto',
                        height: 77,
                        transition: 'all .3s',
                        transform: 'translate(0, -100%)',
                      }}
                    >
                      <InfoOutlined fontSize='large' sx={{ mr: 2 }} />
                      Game Info
                    </Button>
                    <Button
                      className='game-button'
                      color='white'
                      variant='outlined'
                      href={PATH_PAGE.nfts.root}
                      sx={{
                        maxWidth: 300,
                        width: '100%',
                        m: '20px auto',
                        height: 77,
                        transition: 'all .3s',
                        transform: 'translate(0, 100%)',
                      }}
                    >
                      <ShoppingCartOutlinedIcon fontSize='large' sx={{ mr: 2 }} />
                      Game Store
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}
