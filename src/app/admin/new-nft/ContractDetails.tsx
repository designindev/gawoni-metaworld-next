import { Box, Button, TextField, Typography, Modal, IconButton, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'

export const ContractDetails = () => {
  return (
    <>
      <Stack bgcolor={'dark.main'} borderRadius={6} p={6} alignContent={'flex-start'} spacing={5}>
        <Typography variant='label'>Contract Details</Typography>
        <ContractDetail label={'Binance Smart Chain (BEP20)'} btnText='Add binance Smart Chain (BEP20)' open />
        <ContractDetail label={'Polygon'} btnText='Add polygon' open />
        <ContractDetail label={'Etherum Mainnet'} btnText='Add etherum Mainnet' open />
        <ContractDetail label={'Chain'} btnText='Add chain' />
      </Stack>
    </>
  )
}

const ContractDetail = ({ label, btnText, open: defaultOpen }: { label: string; btnText: string; open?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <>
      {open ? (
        <Stack direction={'row'} spacing={2} alignItems={'flex-start'}>
          <TextField label={label} placeholder='Paste here' />
          <IconButton
            onClick={() => setOpen(false)}
            aria-label='delete'
            sx={{ flexShrink: 0, marginTop: '43px', color: '#FF0606', mr: -3 }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          color='white'
          variant='outlined'
          size='small'
          startIcon={<AddIcon />}
          sx={{ alignSelf: 'flex-start' }}
        >
          {btnText}
        </Button>
      )}
    </>
  )
}
