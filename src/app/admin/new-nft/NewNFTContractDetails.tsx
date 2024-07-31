import { Box, Button, TextField, Typography, Modal, IconButton, Stack } from '@mui/material'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export const NewNFTContractDetails = () => {
  return (
    <>
      <Stack sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 8, gap: '20px' }}>
        <Typography variant='label'>Contract Details</Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
          <TextField label='Binance Smart Chain (BEP20)' placeholder='Paste here' />
          <IconButton aria-label='delete' sx={{ flexShrink: 0, marginTop: '43px', color: '#FF0606' }}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
          <TextField label='Binance Smart Chain (BEP20)' placeholder='Paste here' />
          <IconButton aria-label='delete' sx={{ flexShrink: 0, marginTop: '43px', color: '#FF0606' }}>
            <DeleteIcon />
          </IconButton>
        </Box>
        <Button color='white' variant='outlined' startIcon={<AddIcon />} sx={{ alignSelf: 'flex-start' }}>
          Add chain
        </Button>
      </Stack>
    </>
  )
}
