'use client'

import Link from 'next/link'
import { Box, Stack, Typography } from '@mui/material'
import { getNftCss } from 'entities/nft'

export const NftDetails = () => {
  return (
    <>
      <div className='nft-detail__block'>
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
          color={'dark.main'}
          mb={6}
          sx={{ ...getNftCss('Mystic') }}
        >
          <Box fontWeight={500}>Mystic</Box>
          <Box fontWeight={600} fontSize={20}>
            $20.00
          </Box>
        </Stack>
        <ul className='detail-list nft-detail__list'>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label'>Edition</div>
            <div className='detail-list__value'>K4 Rally NFT Car - Race Edition #1 2023</div>
          </li>
          <li className='detail-list__item detail-list__item--row'>
            <div className='detail-list__label'>Car Model</div>
            <div className='detail-list__value'>Monsun</div>
          </li>
        </ul>
      </div>
      <div className='nft-detail__block nft-detail__block--sm'>
        <ul className='detail-list nft-detail__list'>
          <li className='detail-list__item'>
            <div className='detail-list__label'>Additional Details</div>
            <div className='detail-list__value'>
              <p>The K4 Rally Race Editition is an easy way to get into our Game and participate in Tournaments!</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='nft-detail__block nft-detail__block--sm'>
        <div className='detail-list__label'>Contract Details</div>
        <div className='detail-list__value'>
          <p>
            To view your NFT in your wallet, please go to your profile and click the “Add to Wallet” button below your
            NFT”
          </p>
        </div>
      </div>
      <div className='nft-detail__block nft-detail__block--sm'>
        <ul className='detail-list nft-detail__list'>
          <li className='detail-list__item'>
            <div className='detail-list__label'>Guides</div>
            <div className='detail-list__value detail-list__value--fz-14-mobile'>
              <p>
                You don’t have a Metamask wallet? You need more information about how to register and mint a NFT? <br />
                Please refer to our{' '}
                <Box component={Link} color={'primary.main'} href='#'>
                  FAQ
                </Box>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
