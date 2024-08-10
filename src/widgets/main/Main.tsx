'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { onScrollToBlock } from 'shared/lib'
import { Section, SwiperControls } from 'shared/ui'
import { items } from './items'

export const Main = () => {
  return (
    <Section first pt={0} pb={0}>
      <Swiper
        modules={[Navigation, Pagination]}
        // effect={'fade'}
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
        loop
      >
        {items.map((el, i) => {
          return (
            <SwiperSlide key={i}>
              <Slide slide={el} />
            </SwiperSlide>
          )
        })}
        <SwiperControls
          sx={(theme) => ({
            position: 'absolute',
            [theme.breakpoints.up('xxxxl')]: {
              left: '50%',
              ml: 205,
            },
            [theme.breakpoints.up('xl')]: {
              top: 0,
              bottom: 0,
              right: 30,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
            [theme.breakpoints.down('xl')]: {
              bottom: '40px',
              left: 15,
              right: 15,
            },
          })}
          swiperButtonProps={{
            sx: (theme) => ({
              [theme.breakpoints.up('xl')]: {
                transform: 'rotate(90deg)',
                width: 44,
                height: 44,
                borderColor: '#ff4501',
                position: 'relative',
                m: '0 auto',
                '&::before': {
                  backgroundImage: 'url(/images/icons/noun-arrow-secondary.svg)',
                },
                '&::after': {
                  backgroundImage: 'url(/images/icons/noun-arrow.svg)',
                },
              },
            }),
          }}
          swiperPaginationProps={{
            sx: (theme) => ({
              [theme.breakpoints.up('xl')]: {
                flexDirection: 'column',
                my: 5,
              },
            }),
          }}
        />
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

// export interface StatProps {
//   value: number | string
//   unit: string
//   variant?: 'outlined'
// }

// interface StatOwnerState extends StatProps {
//   // …key value pairs for the internal state that you want to style the slot
//   // but don't want to expose to the users
// }

// const StatRoot = styled('div', {
//   name: 'MuiStat',
//   slot: 'root',
// })<{ ownerState: StatOwnerState }>(({ theme, ownerState }) => ({}))

// const StatValue = styled('div', {
//   name: 'MuiStat',
//   slot: 'value',
// })<{ ownerState: StatOwnerState }>(({ theme }) => ({}))

// const StatUnit = styled('div', {
//   name: 'MuiStat',
//   slot: 'unit',
// })<{ ownerState: StatOwnerState }>(({ theme }) => ({}))

// const Stat = forwardRef<HTMLDivElement, StatProps>(function Stat(inProps, ref) {
//   const props = useThemeProps({ props: inProps, name: 'MuiStat' })
//   const { value, unit, variant, ...other } = props

//   const ownerState = { ...props, variant }

//   return (
//     <StatRoot ref={ref} ownerState={ownerState} {...other}>
//       <StatValue ownerState={ownerState}>{value}</StatValue>
//       <StatUnit ownerState={ownerState}>{unit}</StatUnit>
//     </StatRoot>
//   )
// })

// export default function StatFullTemplate() {
//   return (
//     <Stack direction='row' spacing={2}>
//       <Stat value='1.9M' unit='Favorites' />
//       <Stat value='5.1M' unit='Views' variant='outlined' />
//     </Stack>
//   )
// }
