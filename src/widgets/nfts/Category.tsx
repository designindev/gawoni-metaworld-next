'use client'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControls, SwiperButton, SwiperPagination } from 'shared/ui'
import { NFT, NftCard } from 'entities/nft'
import { PATH_PAGE, useAppDispatch } from 'shared/lib'
import { Box, Button, Typography } from '@mui/material'

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
        className='swiper--visible items items--slider nfts__items'
        wrapperClass='items__slider nfts__items-slider'
        loop
      >
        {items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <NftCard nft={item} link={PATH_PAGE.shop.slug(item.id)} />
            </SwiperSlide>
          )
        })}
        <SwiperControls className='nfts__items-controls' bottom>
          <SwiperButton side='left' circle />
          <SwiperPagination />
          <SwiperButton side='right' circle />
        </SwiperControls>
      </Swiper>
    </Box>
  )
}
