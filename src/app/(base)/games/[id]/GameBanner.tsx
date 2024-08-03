import { Box, Stack, Typography } from '@mui/material'
import { Social } from 'shared/ui'

export const GameBanner = () => {
  return (
    <Stack
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      position={'relative'}
      padding={'50px 30px'}
      borderRadius={2}
      border={'1px solid'}
      borderColor={{ xl: 'transparent', xs: 'secondary.main' }}
      sx={{
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: { xxl: 'url(/images/bg/banner.png)', xs: 'none' },
        minHeight: { xxl: '280px', xs: 'auto' },
      }}
    >
      <Box
        display={{ xxl: 'none', xs: 'block' }}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '10px',
          bottom: '10px',
          border: 'inherit',
          borderRadius: 'inherit',
          backgroundSize: 'cover',
          backgroundImage: 'url(/images/bg/banner-mobile.jpg)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      ></Box>
      <Box maxWidth={700}>
        <Typography variant='h4' fontSize={28} component={'h4'} fontWeight={900} textTransform={'uppercase'}>
          join our game community
        </Typography>
        <Box mt={4} lineHeight={1.5}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt in ultrices pharetra massa in. Aliquam et scelerisque
            cursus etiam diam id aliquam. Gravida quam sit et.
          </p>
        </Box>
        <Box mt={8}>
          <Social hidden={{ tg: true }} />
        </Box>
      </Box>
    </Stack>
  )
}
