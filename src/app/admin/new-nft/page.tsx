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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useState } from 'react'
import { NftParameters, NftDetails } from 'widgets'
import { notifySuccess } from 'shared/lib'
import ImageNFT from 'shared/images/nfts/nfts-1.jpg'
import { NftCard } from 'entities/nft'
import Logos from 'shared/images/nfts/logos.png'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type FormValues = {
  fieldArray: { name: string }[]
}

export default function NewNftPage() {
  const [isPreview, setIsPreview] = useState(false)
  const route = useRouter()
  const methods = useForm<FormValues>()
  const bgClass = 'bg-mystic'

  const onToggle = () => {
    setIsPreview((p) => !p)
    window.scrollTo(0, 0)
  }

  const onAdd = () => {
    notifySuccess('You have successfully added nft')
    route.push('/admin')
  }

  return (
    <FormProvider {...methods}>
      {isPreview === false ? (
        <Box component={'section'} className='section'>
          <Container>
            <Typography variant='h1' component='h1' mb={8}>
              add new nft
            </Typography>
            <Stack spacing={12}>
              <Box>
                <Grid container spacing={10}>
                  <Grid item md={5} xs={12}>
                    <Stack
                      direction={'column'}
                      height={379}
                      border={'2px dashed #fff;'}
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      spacing={10}
                      borderRadius={2}
                    >
                      <ImageIcon sx={{ height: 80, width: 80 }} />
                      <Typography variant='h3' component='h3' fontSize={26}>
                        Drag & drop files to upload
                      </Typography>
                      <Button color='white' size='small' sx={{ minWidth: 212 }}>
                        Select files
                      </Button>
                    </Stack>
                    <Grid container spacing={4} mt={5}>
                      <Grid item xs={4}>
                        <Box position={'relative'}>
                          <Image src={Image1} alt='' />
                          <IconButton
                            aria-label='delete'
                            sx={{ position: 'absolute', top: 2, right: 2, color: '#FF0606' }}
                          >
                            <DeleteOutlinedIcon fontSize='large' />
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
                            <DeleteOutlinedIcon fontSize='large' />
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
                            <DeleteOutlinedIcon fontSize='large' />
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
                <Stack direction={'row'} justifyContent={'flex-end'} spacing={4}>
                  <Button
                    size='large'
                    sx={{ width: { xs: '100%', sm: '453px' } }}
                    color='white'
                    variant='outlined'
                    onClick={onToggle}
                  >
                    Preview
                  </Button>
                  <Button size='large' sx={{ width: { xs: '100%', sm: '453px' } }} onClick={onAdd}>
                    Add NFT
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </Box>
      ) : (
        <Box component={'section'} className='section'>
          <Container>
            <Grid container spacing={12} className='row'>
              <Grid item lg={4} md={9} xs={12} marginX={'auto'}>
                <NftParameters />
              </Grid>
              <Grid item lg={4} md={6} xs={12} sx={{ order: { lg: -1, xs: 0 } }}>
                <NftDetails />
              </Grid>
              <Grid item lg={4} md={6} xs={12}>
                <NftCard
                  nft={{
                    id: '1',
                    src: ImageNFT.src,
                    title: 'K 4 Race edition #1',
                    price: '$20',
                    rarity: 'Mystic',
                    logos: Logos.src,
                  }}
                />
              </Grid>
            </Grid>
            <Box mt={12}>
              <Stack direction={'row'} justifyContent={'flex-end'} spacing={4}>
                <Button
                  size='large'
                  sx={{ width: { xs: '100%', sm: '453px' } }}
                  color='white'
                  variant='outlined'
                  onClick={onToggle}
                >
                  Back
                </Button>
                <Button size='large' sx={{ width: { xs: '100%', sm: '453px' } }} onClick={onAdd}>
                  Add NFT
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      )}
    </FormProvider>
  )
}
