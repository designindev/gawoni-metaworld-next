import { Box, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import FormImage from 'shared/images/bg/form-img.png'
import Logo from 'shared/images/logo.png'
import { Section } from 'shared/ui'

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Section>
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
          <Grid item lg={5} xs={12} sx={{ textAlign: 'right', display: { lg: 'block', xs: 'none' } }}>
            <Box
              display={'inline-block'}
              sx={{
                mb: { lg: 26, xs: 12 },
                width: { md: '414px', xs: '350px' },
                height: { md: '123px', xs: '104px' },
                position: 'relative',
              }}
            >
              <Image src={Logo} alt='Logo' layout='fill' objectFit='cover' priority />
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
    </Section>
  )
}
