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
          <Grid container spacing={{ xs: 6, lg: 10 }} className='row s-form__row'>
            <Grid
              item
              md={6}
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                '@media only screen and (min-width: 1200px)': {
                  paddingBottom: '100px',
                },
              }}
            >
              {children}
            </Grid>
            <Grid item md={6} xs={12} className='s-form__right' sx={{ textAlign: 'right' }}>
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
