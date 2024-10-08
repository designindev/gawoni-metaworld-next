import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from 'shared/ui'
import { items } from './items'

export default function Download() {
  return (
    <Section>
      <Container>
        <Typography variant='h1' component='h1' textAlign={'center'} fontSize={64} mb={{ lg: 15, xs: 8 }}>
          play k4 rally
        </Typography>

        <Grid container spacing={{ xs: 6, lg: 10 }} justifyContent={'center'}>
          {items.map((el, i) => {
            return (
              <Grid item key={i} lg={4} sm={6} xs={12}>
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
                  <Box sx={{ height: '100px', lineHeight: '100px', mb: 2 }}>
                    <Image src={el.image} alt='' />
                  </Box>
                  <Typography
                    variant='h5'
                    component='h3'
                    textTransform={'uppercase'}
                    mb={'auto'}
                    fontWeight={700}
                    fontFamily={'var(--font-whyte)'}
                  >
                    {el.title}
                  </Typography>
                  <Button component={Link} href={'/'} size='large' fullWidth sx={{ marginTop: '30px', height: 64 }}>
                    {el.btn}
                  </Button>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}
