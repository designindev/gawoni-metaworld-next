import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { COLORS } from 'shared/const'

export const NewNFTEdition = () => {
  return (
    <>
      <Typography variant={'h5'} component={'h3'} sx={{ fontFamily: 'Whyte', fontWeight: '700', mb: 8 }}>
        Choose edition
      </Typography>
      <Grid spacing={8} container>
        <Grid item lg={3}>
          <Box sx={{ border: '3px solid white', py: 11, px: 8 }}>
            <Typography variant='h3' sx={{ color: COLORS.primary }}>
              Race edition
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box sx={{ border: '3px solid white', py: 11, px: 8 }}>
            <Typography variant='h3'>Race edition</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box sx={{ border: '3px solid white', py: 11, px: 8 }}>
            <Typography variant='h3'>Race edition</Typography>
          </Box>
        </Grid>
        <Grid item lg={3}>
          <Box sx={{ border: '3px solid white', py: 11, px: 8 }}>
            <Typography variant='h3'>Race edition</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
