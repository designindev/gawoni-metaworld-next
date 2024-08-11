'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NFT, NftCard } from 'entities/nft'
import { PATH_PAGE, useAppDispatch } from 'shared/lib'
import { Box, Button, Typography } from '@mui/material'
import { SwiperControls } from 'shared/ui'

type Props = {
  title: string
  items: NFT[]
}

export const Category = (props: Props) => {
  const { title, items } = props

  return (
    <Box>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={11}>
        <Typography
          variant='h4'
          component='h3'
          fontWeight={700}
          fontFamily={'var(--font-whyte)'}
          textTransform='uppercase'
          mr={8}
        >
          {title}
        </Typography>
        <Button href={PATH_PAGE.shop.root} sx={{ display: { lg: 'inline-flex', xs: 'none' } }}>
          Show all
        </Button>
        <Button href={PATH_PAGE.shop.root} size={'small'} sx={{ display: { lg: 'none' } }}>
          Show all
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          '& .swiper': {
            overflow: 'visible',
            [theme.breakpoints.up('lg')]: {
              mr: -25,
              pl: 25,
            },
            [theme.breakpoints.down('lg')]: {
              pr: 12,
            },
          },
          '& .swiper-slide': {
            opacity: 1,
            transition: 'opacity .5s',
          },
          '& .swiper-slide-prev': {
            opacity: 0,
          },
        })}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          watchSlidesProgress
          spaceBetween={16}
          breakpoints={{
            576: { slidesPerView: 2, slidesPerGroup: 2 },
            992: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 40 },
          }}
          loop
        >
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <NftCard nft={item} link={PATH_PAGE.shop.slug(item.id)} />
              </SwiperSlide>
            )
          })}
          <Box
            position={'absolute'}
            top={0}
            left={'100%'}
            ml={-50}
            bottom={0}
            width={400}
            zIndex={3}
            sx={{
              background: 'linear-gradient(270deg, #080808 0%, rgba(8, 8, 8, 0) 100%)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
          <SwiperControls
            mt={10}
            justifyContent={'center'}
            sx={(theme) => ({
              [theme.breakpoints.up('lg')]: {
                ml: -25,
                pr: 25,
              },
            })}
            swiperButtonProps={{
              sx: {
                position: 'absolute',
                top: '235px',
              },
            }}
          />
        </Swiper>
      </Box>
    </Box>
  )
}
