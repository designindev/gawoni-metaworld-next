import { Box, Button, TextField, Typography, Modal, IconButton, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { AddChainModal } from './AddChainModal'

export const ContractDetails = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Stack sx={{ backgroundColor: 'dark.main', borderRadius: 6, p: 6, gap: 5, alignContent: 'flex-start' }}>
        <Typography variant='label'>Contract Details</Typography>
        <Stack flexDirection={'row'} gap={2} alignItems={'flex-start'}>
          <TextField label='Binance Smart Chain (BEP20)' placeholder='Paste here' />
          <IconButton aria-label='delete' sx={{ flexShrink: 0, marginTop: '43px', color: '#FF0606', mr: -3 }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Stack flexDirection={'row'} gap={2} alignItems={'flex-start'}>
          <TextField label='Polygon' placeholder='Paste here' />
          <IconButton aria-label='delete' sx={{ flexShrink: 0, marginTop: '43px', color: '#FF0606', mr: -3 }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Stack flexDirection={'row'} gap={2} alignItems={'flex-start'}>
          <TextField label='Etherum Mainnet' placeholder='Paste here' />
          <IconButton aria-label='delete' sx={{ flexShrink: 0, marginTop: '43px', color: '#FF0606', mr: -3 }}>
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Button onClick={handleOpen} color='white' variant='outlined' size='small' startIcon={<AddIcon />} sx={{ alignSelf: 'flex-start' }}>
          Add chain
        </Button>
        <AddChainModal open={open} handleClose={handleClose} />
      </Stack>
    </>
  )
}
