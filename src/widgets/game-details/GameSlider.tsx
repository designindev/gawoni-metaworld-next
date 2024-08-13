'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Thumbs } from 'swiper/modules'
import ISwiper from 'swiper'
import Image, { StaticImageData } from 'next/image'
import dynamic from 'next/dynamic'
import { Box, Grid } from '@mui/material'
// TODO: FIX IT
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export type GameSlide =
  | {
      full: StaticImageData
      thumb: StaticImageData
      type: 'image'
    }
  | {
      full: string
      preview: string
      thumb: StaticImageData
      type: 'video'
    }

type Props = {
  slides: GameSlide[]
}

export const GameSlider = (props: Props) => {
  const { slides } = props

  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null)
  const swiper = thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null

  return (
    <Box>
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        <Grid item xxl={10} lg={9} sm={8} xs={12}>
          <Box
            sx={{
              // TODO: FIX IT
              height: 676,
              '& > div': {
                height: { lg: '100%', xs: 'auto' },
                minHeight: { lg: 676, xs: 'auto' },
              },
            }}
          >
            <Swiper loop={true} spaceBetween={30} thumbs={{ swiper }} modules={[FreeMode, Thumbs]}>
              {slides.map((el, i) => (
                <SwiperSlide key={i}>
                  {el.type === 'video' ? (
                    <Box
                      sx={{
                        // TODO: NOT WORKING
                        '& .react-player__preview': {
                          borderRadius: 3,
                        },
                        '& .react-player__shadow': {
                          width: '100px !important',
                          height: '100px !important',
                        },
                        '& .react-player__play-icon': {
                          width: 100,
                          height: 100,
                          background: 'center / contain no-repeat',
                          backgroundImage: 'url(/images/icons/play.svg)',
                          border: 'none !important',
                        },
                        '& video': {
                          objectFit: 'cover',
                          borderRadius: 3,
                        },
                      }}
                    >
                      <ReactPlayer
                        width='100%'
                        height='100%'
                        // light={el.preview}
                        url={el.full}
                        playing={false}
                        muted={true}
                        controls={true}
                      />
                    </Box>
                  ) : (
                    <>
                      <Box
                        borderRadius={{ lg: 3, xs: 2 }}
                        height={'100%'}
                        sx={{
                          cursor: 'pointer',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            display: 'block',
                            height: { lg: '100%', xs: 400 },
                          },
                        }}
                      >
                        <Image
                          src={el.full.src}
                          width={0}
                          height={0}
                          sizes='100vw'
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 'inherit',
                          }}
                          alt=''
                          priority
                        />
                      </Box>
                    </>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
        <Grid item xxl={2} lg={3} sm={4} xs={12}>
          <Box
            sx={{
              // TODO: FIX IT
              '& > div': { height: { lg: 676, xs: 400 } },
            }}
          >
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={8}
              direction='horizontal'
              breakpoints={{
                576: { direction: 'vertical' },
                768: { direction: 'vertical' },
                992: { direction: 'vertical' },
                1200: { direction: 'vertical' },
              }}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
            >
              {slides.map((el, i) => (
                <SwiperSlide key={i}>
                  <Box
                    borderRadius={{ lg: 3, xs: 2 }}
                    height={'100%'}
                    sx={{
                      '.swiper-slide-thumb-active &::after': {
                        borderColor: 'secondary.main',
                      },
                      cursor: 'pointer',
                      position: 'relative',

                      '&::before': {
                        content: '""',
                        display: 'block',
                        pt: { lg: '100%', xs: '80%' },
                        position: 'relative',
                      },
                      '&::after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 3,
                        borderRadius: 'inherit',
                        border: '3px solid transparent',
                        transition: 'border .3s',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: el.type === 'video' ? 'url(/images/icons/play.svg)' : 'unset',
                      },
                    }}
                  >
                    <Image
                      src={el.thumb.src}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 'inherit',
                      }}
                      alt=''
                      priority
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
