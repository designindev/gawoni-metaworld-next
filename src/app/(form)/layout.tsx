import { Box, Container, Grid } from '@mui/material'
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
              lg={6}
              md={8}
              xs={12}
              sx={{
                '@media only screen and (min-width: 1200px)': {
                  paddingBottom: '100px',
                },
              }}
            >
              {children}
            </Grid>
            <Grid item lg={6} md={4} xs={12} className='s-form__right' sx={{ textAlign: 'right' }}>
              <div className='logo logo--xl s-form__logo'>
                <Image src={Logo} alt='Logo' priority />
              </div>
              <div className='s-form__image'>
                <Image src={FormImage} alt='' priority />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
