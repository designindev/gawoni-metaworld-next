import { Box, Container, Grid, Typography, Button as ButtonUI } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import DownloadImage1 from 'shared/images/download/download-1.svg'
import DownloadImage2 from 'shared/images/download/download-2.svg'
import DownloadImage3 from 'shared/images/download/download-3.svg'
import { SignInForm } from './SignInForm'

const items = [
  {
    image: DownloadImage1,
    title: 'PC Client version (windows)',
    btn: 'Download',
  },
  {
    image: DownloadImage2,
    title: 'Game Streaming',
    btn: 'Play',
  },
  {
    image: DownloadImage3,
    title: 'Mobile (android apk)',
    btn: 'Download',
  },
]

export default function Download() {
  return (
    <Box component={'section'} className='section'>
      <Container>
        <Typography variant='sectionTitle' component='h1' textAlign={'center'}>
          play k4 rally
        </Typography>
        <SignInForm/>
        <Grid container spacing={8} justifyContent={'center'} display={'none'}>
          {items.map((el, i) => {
            return (
              <Grid item key={i} lg={4} sm={6}>
                <Box
                  sx={{
                    height: '100%',
                    paddingX: 6,
                    paddingY: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid white',
                    borderRadius: 4,
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ lineHeight: '80px', mb: 8 }}>
                    <Image src={el.image} alt='' />
                  </Box>
                  <Typography variant='h4' component='h3' textTransform={'uppercase'} mb={'auto'}>
                    {el.title}
                  </Typography>
                  <Box marginTop={'30px'}>
                    <ButtonUI component={Link} href={'/'} variant='contained' color='primary' size='large' fullWidth>
                      {el.btn}
                    </ButtonUI>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
