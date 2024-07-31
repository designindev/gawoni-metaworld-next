import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const NewNFTContractDetails = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 8 }}>
        <Typography variant='label'>Contract Details</Typography>
        <TextField label='Binance Smart Chain (BEP20)' placeholder='Paste here' />
        <Button color='white' variant='outlined'>
          Add chain
        </Button>
      </Box>
    </>
  )
}
