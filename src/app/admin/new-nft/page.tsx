'use client'

import { Box, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import { Input } from 'shared/ui'
import { NewNFTEdition } from './NewNFTEdition'
import { NewNFTAccordion } from './NewNFTAccordion'
import { NewNFTBasicInfo } from './NewNFTBasicInfo'
import { NewNFTContractDetails } from './NewNFTContractDetails'

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
                <NewNFTBasicInfo />
              </Grid>
            </Grid>
            <Box>
              <NewNFTContractDetails />
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
