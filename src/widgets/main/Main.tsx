'use client'

import { Box, BoxProps, Button, Container, Grid, styled, Typography } from '@mui/material'
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image1 from './slide-1.jpg'
import Image2 from './slide-2.jpg'
import { onScrollToBlock } from 'shared/lib'
import { Section, SwiperButton, SwiperPagination } from 'shared/ui'

const items = [
  {
    image: Image1,
    title: 'GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
  {
    image: Image2,
    title: '2GAWOONI MetaWorld -',
    titleSecond: 'blockchain gaming portal',
    content:
      'Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper. Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas',
  },
]

export const Main = () => {
  return (
    <Section first pb={0}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        watchSlidesProgress
      >
        {items.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Slide slide={el} />
            </SwiperSlide>
          )
        })}
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          right={30}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          left={'50%'}
          ml={205}
        >
          top: 0; bottom: 0; right: 30px; justify-content: center; flex-direction: column;
          <SwiperButton
            className='swiper-button-prev'
            side='left'
            circle
            sx={{
              transform: 'rotate(90deg)',
              width: 44,
              height: 44,
              borderColor: '#ff4501',
              position: 'relative',
              mx: 'auto',
            }}
          />
          <SwiperPagination className='swiper-pagination' />
          <SwiperButton
            className='swiper-button-next'
            side='right'
            circle
            sx={{
              transform: 'rotate(90deg)',
              width: 44,
              height: 44,
              borderColor: '#ff4501',
              position: 'relative',
              mx: 'auto',
            }}
          />
        </Box>
      </Swiper>
    </Section>
  )
}

const Slide = ({ slide }: { slide: (typeof items)[0] }) => {
  return (
    <Box
      height={{ lg: 1000, xs: 844 }}
      display={'flex'}
      alignItems={'flex-end'}
      pb={{ xs: '110px', xl: '70px' }}
      sx={{
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundImage: `url(${slide.image.src})`,
      }}
    >
      <Box sx={{ height: { lg: '85px', xs: '60px' } }}></Box>
      <Container maxWidth={'xxxxl'}>
        <Typography
          variant='h1'
          lineHeight={1.3}
          fontSize={{ xxxxl: 72, xxxl: 66, xxl: 66, xl: 60, lg: 56, md: 50, sm: 44, xs: 40 }}
        >
          <Box component={'span'} color={'primary.main'}>
            {slide.title}
          </Box>
          <Box component={'span'} display={'block'} pl={{ lg: 63, xs: 8 }} mt={{ lg: 0, xs: 1 }}>
            {slide.titleSecond}
          </Box>
        </Typography>

        <Box mt={{ lg: 17, xs: 10 }} display={{ lg: 'flex', xs: 'block' }} justifyContent={'space-between'}>
          <Typography
            variant='body1'
            component={'p'}
            fontSize={{ lg: 18, sm: 16, xs: 14 }}
            p={{ lg: '7px 30px 7px 15px', xs: '7px 0 7px 10px' }}
            borderLeft={'3px solid'}
            borderColor={'secondary.main'}
            maxWidth={700}
          >
            {slide.content}
          </Typography>
          <Box mt={{ lg: 4, xs: 3 }} flexShrink={0} maxWidth={220} width={'100%'}>
            <Button color='white' variant='outlined' href={'news'} onClick={(e) => onScrollToBlock(e, '#news')}>
              Learn more
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
