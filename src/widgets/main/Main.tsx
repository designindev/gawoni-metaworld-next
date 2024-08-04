'use client'

import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { A11y, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperControls, SwiperButton, SwiperPagination } from 'shared/ui'
import Image1 from './slide-1.jpg'
import Image2 from './slide-2.jpg'
import { onScrollToBlock } from 'shared/lib'

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
    <Box component={'section'} mt={{ xs: '-60px', md: '-85px' }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        watchSlidesProgress
        className='items items--slider main__items'
        wrapperClass='items__slider main__items-slider'
        loop
      >
        {items.map((el, i) => {
          return (
            <SwiperSlide key={i} className='main__items-slide'>
              <Box
                height={{ lg: 1000, xs: 844 }}
                display={'flex'}
                alignItems={'flex-end'}
                pb={{ xs: '110px', xl: '70px' }}
                sx={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundImage: `url(${el.image.src})`,
                }}
              >
                <Box sx={{ height: { lg: '85px', xs: '60px' } }}></Box>
                <Container maxWidth={'xxxxl'}>
                  <Typography
                    variant='h1'
                    component='h2'
                    lineHeight={1.3}
                    fontSize={{ xxxxl: 72, xxxl: 66, xxl: 66, xl: 60, lg: 56, md: 50, sm: 44, xs: 40 }}
                  >
                    <Box component={'span'} color={'primary.main'}>
                      {el.title}
                    </Box>
                    <Box
                      component={'span'}
                      display={'block'}
                      pl={{ lg: 63, xs: 8 }}
                      mt={{ lg: 0, xs: 1 }}
                      className='main__items-title-second'
                    >
                      {el.titleSecond}
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
                      {el.content}
                    </Typography>
                    <Box mt={{ lg: 4, xs: 3 }} flexShrink={0} maxWidth={220} width={'100%'}>
                      <Button
                        color='white'
                        variant='outlined'
                        href={'news'}
                        onClick={(e) => onScrollToBlock(e, '#news')}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </SwiperSlide>
          )
        })}
        <SwiperControls className='main__items-controls' bottom>
          <SwiperButton side='left' circle />
          <SwiperPagination />
          <SwiperButton side='right' circle />
        </SwiperControls>
      </Swiper>
    </Box>
  )
}
