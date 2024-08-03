import {
  Typography,
  Grid,
  TextField,
  Stack,
  Input,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from '@mui/material'
import React from 'react'

export const NewNFTBasicInfo = () => {
  return (
    <>
      <Stack bgcolor={'dark.main'} borderRadius={6} p={6} spacing={4}>
        <Typography variant='label'>Basic Info</Typography>
        <Grid container rowSpacing={8} columnSpacing={6} className='row'>
          <Grid item md={6} xs={12}>
            <TextField name='name' label='Name*' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='game' label='Game*' placeholder='Enter NFT name' />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='country'>Price*</InputLabel>
              <Select labelId='demo-simple-select-label' id='country' label='Age' fullWidth>
                <MenuItem value=''>
                  <em>Select price</em>
                </MenuItem>
                <MenuItem value={'$'}>$</MenuItem>
                <MenuItem value={'€'}>€</MenuItem>
                <MenuItem value={'£'}>£</MenuItem>
              </Select>
              {false && <FormHelperText>{'error'}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              name='category'
              label='Max. mint amount'
              placeholder='Enter category'
              inputProps={{
                placeholder: 'Placeholder',
                style: {
                  color: 'blue',
                  fontWeight: 'bold',
                },
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField name='rarity' label='Rarity' placeholder='Enter rarity' />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='country'>Rarity</InputLabel>
              <Select labelId='demo-simple-select-label' id='country' fullWidth>
                <MenuItem value=''>
                  <em>Select rarity</em>
                </MenuItem>
                <MenuItem value={'Mystic'}>Mystic</MenuItem>
                <MenuItem value={'legendary'}>legendary</MenuItem>
                <MenuItem value={'signature'}>signature</MenuItem>
              </Select>
              {false && <FormHelperText>{'error'}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              name='additionDetail'
              label='Additional Details'
              placeholder='Enter NFT name'
              multiline
              sx={{
                '& .MuiInputBase-root': {
                  height: 'auto',
                },
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
