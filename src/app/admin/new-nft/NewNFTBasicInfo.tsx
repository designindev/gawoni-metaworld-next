import { Typography, Grid, TextField, Stack, Input } from '@mui/material'
import React from 'react'

export const NewNFTBasicInfo = () => {
  return (
    <>
      <Stack sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 6, gap: 5 }}>
        <Typography variant='label'>Basic Info</Typography>
        <Grid container rowSpacing={9} columnSpacing={6} className='row'>
          <Grid item md={6} xs={12}>
            <TextField name='name' label='Name*' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='game' label='Game*' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='price' label='Price*' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='price' label='Max. mint amount' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='price' label='Category' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='price' label='Rarity' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              name='additionDetail'
              label='Additional Details'
              placeholder='Enter NFT name'
              multiline
              sx={{
                '& .MuiInputBase-inputMultiline': {
                  height: '90px!important',
                },
              }}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}
