'use client'

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Input } from 'shared/ui'
import { NewNFTEdition } from './NewNFTEdition'
import { NewNFTAccordion } from './NewNFTAccordion'

export default function NewNftPage() {
  return (
    <>
      <Box component={'section'} className='section'>
        <Container>
          <Typography variant='sectionTitle' component='h1'>
            add new nft
          </Typography>

          <Stack spacing={12}>
            <Grid container>
              <Grid item md={5} xs={12}>
                <Box>123</Box>
              </Grid>
              <Grid item md={7} xs={12}>
                <Box sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 8 }}>
                  <Typography variant='label'>Basic Info</Typography>
                  <Grid container spacing={6} className='row'>
                    <Grid item md={6} xs={12}>
                      <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
                    </Grid>
                    <Grid item xs={12}>
                      <Input name='email' label='Username or email' placeholder='Enter your username or email' />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 8 }}>
              <Typography variant='label'>Basic Info</Typography>
              <Input type='text' name='email' label='Binance Smart Chain (BEP20)' placeholder='Enter your username or email' />
            </Box>
            <Box>
              <NewNFTEdition />
            </Box>
            <Box>
              <NewNFTAccordion />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
