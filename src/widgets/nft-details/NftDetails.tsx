'use client'

import Link from 'next/link'
import { Box, Stack, Typography } from '@mui/material'
import { getNftCss } from 'entities/nft'

export const NftDetails = () => {
  return (
    <>
      <Box p={{ lg: 6, xs: 4 }} mb={{ lg: 6, xs: 2 }} bgcolor={'dark.main'} borderRadius={2}>
        <Typography
          variant='h4'
          component={'h1'}
          textTransform={'uppercase'}
          fontWeight={700}
          lineHeight={1.15}
          mb={{ lg: 6, xs: 2 }}
          mt={-2}
        >
          k4 rally nft car - race edition #1 2023
        </Typography>
        <Typography
          variant='h5'
          component={'h2'}
          textTransform={'uppercase'}
          fontWeight={700}
          fontStyle={'italic'}
          color={'primary.main'}
          mb={{ lg: 11, xs: 5 }}
          mt={-2}
        >
          Race edition
        </Typography>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          py={2}
          px={6}
          borderRadius={2}
          mb={6}
          sx={{ ...getNftCss('Mystic') }}
        >
          <Box fontWeight={500}>Mystic</Box>
          <Box fontWeight={600} fontSize={20}>
            $20.00
          </Box>
        </Stack>
        <Stack component={'ul'} spacing={4}>
          <Stack component={'li'} direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Edition
            </Box>
            <Box>K4 Rally NFT Car - Race Edition #1 2023</Box>
          </Stack>
          <Stack component={'li'} direction={'row'} spacing={1} justifyContent={'space-between'} alignItems={'center'}>
            <Box color={'#aaa'} fontSize={14} fontWeight={600}>
              Car Model
            </Box>
            <Box>Monsun</Box>
          </Stack>
        </Stack>
      </Box>
      <Stack spacing={{ lg: 6, xs: 2 }} component={'ul'}>
        <Stack component={'li'} spacing={1} p={{ lg: 4, xs: 4 }} bgcolor={'dark.main'} borderRadius={2}>
          <Box color={'#aaa'} fontSize={14} fontWeight={600}>
            Additional Details
          </Box>
          <Box>The K4 Rally Race Editition is an easy way to get into our Game and participate in Tournaments!</Box>
        </Stack>
        <Stack component={'li'} spacing={1} p={{ lg: 4, xs: 4 }} bgcolor={'dark.main'} borderRadius={2}>
          <Box color={'#aaa'} fontSize={14} fontWeight={600}>
            Contract Details
          </Box>
          <Box>
            To view your NFT in your wallet, please go to your profile and click the “Add to Wallet” button below your
            NFT”
          </Box>
        </Stack>
        <Stack component={'li'} spacing={1} p={{ lg: 4, xs: 4 }} bgcolor={'dark.main'} borderRadius={2}>
          <Box color={'#aaa'} fontSize={14} fontWeight={600}>
            Guides
          </Box>
          <Box fontSize={{ lg: 16, xs: 14 }}>
            You don’t have a Metamask wallet? You need more information about how to register and mint a NFT? <br />
            Please refer to our{' '}
            <Box component={Link} color={'primary.main'} href='#'>
              FAQ
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
