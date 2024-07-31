import { Box, Typography, Grid, TextField } from '@mui/material'
import React from 'react'

export const NewNFTBasicInfo = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 8 }}>
        <Typography variant='label'>Basic Info</Typography>
        <Grid container spacing={6} className='row'>
          <Grid item md={6} xs={12}>
            <TextField label='Car level' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label='Car level' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label='Car level' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label='Car level' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label='Car level' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField label='Car level' />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField label='Car level' />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
