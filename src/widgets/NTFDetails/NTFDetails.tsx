'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { notifySuccess } from 'shared/lib'
import { details } from './details'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

type Props = {
  bgClass: string
}

export const NTFDetails = (props: Props) => {
  const onCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    notifySuccess('Content copied to clipboard')
  }

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
          className={classNames(props.bgClass)}
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
        <ul className='detail-list nft-detail__list'>
          {details.map((el, i) => {
            return (
              <li key={i} className='detail-list__item'>
                {el.label && <div className='detail-list__label'>{el.label}</div>}
                {el.value && <div className='detail-list__value'>{el.value}</div>}
                {el.link && (
                  <>
                    <Box position={'relative'}>
                      <Box pr={8} textOverflow={'ellipsis'} overflow={'hidden'} minHeight={20}>
                        {el.link}
                      </Box>
                      <Box
                        component={IconButton}
                        position={'absolute'}
                        bottom={-5}
                        right={-5}
                        onClick={() => onCopy(el.link!)}
                      >
                        <ContentCopyIcon fontSize='small' />
                      </Box>
                    </Box>
                    <div className='detail-list__button'>
                      <Button color='white' variant={'outlined'} size='small'>
                        Add to your wallet
                      </Button>
                    </div>
                  </>
                )}
              </li>
            )
          })}
        </ul>
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
