'use client'

import { Box, Typography, Modal, TextField, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Checkbox, Button } from '@mui/material'
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
  width: 775,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  paddingX: 7,
  paddingY: 10,
  borderRadius: 6,
}

const colors = [
  '#FF0000',
  '#FF8D29',
  '#FFEC15',
  '#C2F51B',
  '#62FF00',
  '#00FFCC',
  '#00E5FF',
  '#009DFF',
  '#0066FF',
  '#0900FF',
  '#7423FF',
  '#B941FF',
  '#FF41F2',
  '#FF2160',
  '#F80029',
]

export const NewNFTModal = (props: { open: boolean; handleClose: () => void }) => {
  const { open, handleClose } = props

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={styleModal}>
          <CloseIcon fontSize='large' onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontFamily: 'Whyte' }} />
          <Typography variant='h3' sx={{ fontSize: '26px' }}>
            Create new edition
          </Typography>
          <TextField label='Name*' placeholder='Enter edition name' />

          <RadioGroup defaultValue='female' name='colors' sx={{ flexDirection: 'row' }}>
            {colors.map((color, i) => {
              return (
                <Radio
                  key={i}
                  value={color}
                  icon={<Box width={30} height={30} sx={{ backgroundColor: color, borderRadius: 50 }}></Box>}
                  checkedIcon={<Box width={30} height={30} sx={{ backgroundColor: color, borderRadius: 50, border: '5px solid #fff' }}></Box>}
                  sx={{ padding: 2 }}
                />
              )
            })}
          </RadioGroup>
          <Box display={'flex'} justifyContent={'flex-end'} gap={4}>
            <Button color='white' variant='outlined'>
              Cancel
            </Button>
            <Button>Save</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
