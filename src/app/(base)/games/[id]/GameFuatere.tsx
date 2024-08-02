import { Box, Grid, Typography } from '@mui/material'

export const GameFeature = () => {
  return (
    <Box>
      <Grid container spacing={{ xs: 6, lg: 10 }}>
        <Grid item md={6} xs={12}>
          <Box sx={{ border: '1px solid #fff', borderRadius: 2, px: 6, py: 10, height: '100%' }}>
            <Typography variant='h5' component={'h4'} fontWeight={900} fontFamily={'Whyte'} textTransform={'uppercase'}>
              game description
            </Typography>
            <Box mt={6} fontSize={20} lineHeight={1.5}>
              <p>
                The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2
                2024
              </p>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ border: '1px solid #fff', borderRadius: 2, px: 6, py: 10, height: '100%' }}>
            <Typography variant='h5' component={'h4'} fontWeight={900} fontFamily={'Whyte'} textTransform={'uppercase'}>
              game Features
            </Typography>
            <ul className='game-details__features-list text-list'>
              <li>Lorem Ipsum dolor sit amet</li>
              <li>Lorem Ipsum dolor sit amet</li>
              <li>Lorem Ipsum dolor sit amet</li>
              <li>Lorem Ipsum dolor sit amet</li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
