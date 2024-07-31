'use client'

import { Box, Typography, Modal, TextField, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel } from '@mui/material'
import { COLORS } from 'shared/const'
import CloseIcon from '@mui/icons-material/Close'

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  width: 525,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  paddingX: 7,
  paddingY: 10,
  borderRadius: 6,
}

export const NewNFTModal = (props: { open: boolean; handleClose: () => void }) => {
  const { open, handleClose } = props

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={styleModal}>
          <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontFamily: 'Whyte' }} />
          <Typography variant='h3' sx={{ fontSize: '26px', color: COLORS.primary }}>
            Create new edition
          </Typography>
          <TextField label='Name*' placeholder='Enter edition name' />
          <FormControl>
            <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
            <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
              <FormControlLabel value='female' control={<Radio />} label='Female' />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel value='other' control={<Radio />} label='Other' />
            </RadioGroup>
          </FormControl>
        </Box>
      </Modal>
    </>
  )
}
