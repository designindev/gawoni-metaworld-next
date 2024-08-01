'use client'

import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import { Edition } from './Edition'
import { NewNFTAccordion } from './Accordion'
import { NewNFTBasicInfo } from './NewNFTBasicInfo'
import { ContractDetails } from './ContractDetails'
import ImageIcon from '@mui/icons-material/Image'
import Image1 from './images/Rectangle-1.jpg'
import Image2 from './images/Rectangle-2.jpg'
import Image3 from './images/Rectangle-3.jpg'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'

export default function NewNftPage() {
  return (
    <>
      <Box component={'section'} className='section'>
        <Container>
          <Typography variant='h2' component='h1' mb={8}>
            add new nft
          </Typography>

          <Stack spacing={12}>
            <Box>
              <Grid container spacing={10}>
                <Grid item md={5} xs={12}>
                  <Box
                    height={379}
                    border={'2px dashed #fff;'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={10}
                    borderRadius={2}
                  >
                    <ImageIcon sx={{ height: 80, width: 80 }} />
                    <Typography variant='h3' component='h3' fontSize={26}>
                      Drag & drop files to upload
                    </Typography>
                    <Button color='white' size='small' sx={{ minWidth: 212 }}>
                      Select files
                    </Button>
                  </Box>
                  <Grid container spacing={4} mt={5}>
                    <Grid item xs={4}>
                      <Box position={'relative'}>
                        <Image src={Image1} alt='' />
                        <IconButton
                          aria-label='delete'
                          sx={{ position: 'absolute', top: 2, right: 2, color: '#FF0606' }}
                        >
                          <DeleteIcon fontSize='large' />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box position={'relative'}>
                        <Image src={Image2} alt='' />
                        <IconButton
                          aria-label='delete'
                          sx={{ position: 'absolute', top: 2, right: 2, color: '#FF0606' }}
                        >
                          <DeleteIcon fontSize='large' />
                        </IconButton>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box position={'relative'}>
                        <Image src={Image3} alt='' />
                        <IconButton
                          aria-label='delete'
                          sx={{ position: 'absolute', top: 2, right: 2, color: '#FF0606' }}
                        >
                          <DeleteIcon fontSize='large' />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={7} xs={12}>
                  <NewNFTBasicInfo />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <ContractDetails />
            </Box>
            <Box>
              <Edition />
            </Box>
            <Box>
              <NewNFTAccordion />
            </Box>
            <Box>
              <Stack flexDirection={'row'} justifyContent={'flex-end'} gap={4}>
                <Button size='large' sx={{ width: { xs: '100%', sm: '453px' } }} color='white' variant='outlined'>
                  Preview
                </Button>
                <Button size='large' sx={{ width: { xs: '100%', sm: '453px' } }}>
                  Add NFT
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
