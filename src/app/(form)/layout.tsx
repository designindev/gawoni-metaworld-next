import { Box, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import FormImage from 'shared/images/bg/form-img.png'
import Logo from 'shared/images/logo.png'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Box component={'section'} className='section'>
        <Container>
          <Grid container>
            <Grid
              item
              lg={7}
              xs={12}
              sx={{
                '@media only screen and (min-width: 1200px)': {
                  paddingBottom: '100px',
                },
              }}
            >
              <Stack display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
                {children}
              </Stack>
            </Grid>
            <Grid
              item
              lg={5}
              xs={12}
              className='s-form__right'
              sx={{ textAlign: 'right', display: { lg: 'block', xs: 'none' } }}
            >
              <Box sx={{ mb: { lg: 26, xs: 12 } }} className='logo logo--xl'>
                <Image src={Logo} alt='Logo' priority />
              </Box>
              <Box
                display={'inline-block'}
                position={'relative'}
                sx={{
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '452.06px',
                    height: '452.06px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0, 255, 26, 0.19)',
                    filter: 'blur(223.349px)',
                  },
                }}
              >
                <Box
                  component={Image}
                  src={FormImage}
                  alt=''
                  priority
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
