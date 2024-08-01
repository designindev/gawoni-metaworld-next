'use client'

import { Box, Typography, Modal, TextField, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ReactNode } from 'react'

export type ModalProps = { open: boolean; handleClose: () => void; children: ReactNode }

export const CustomedModal = (props: ModalProps) => {
  const { open, handleClose, children } = props

  return (
    <>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: 11,
            maxWidth: 775,
            width: '100%',
            bgcolor: 'dark.main',
            border: '2px solid #000',
            boxShadow: 24,
            paddingY: 10,
            paddingX: 6,
            borderRadius: 6,
          }}
        >
          <IconButton
            aria-label='close'
            sx={{
              position: 'absolute',
              top: '15px',
              right: '5px',
              color: '#fff',
              '&:hover': {
                color: 'secondary.main',
              },
            }}
          >
            <CloseIcon fontSize='large' onClick={handleClose} />
          </IconButton>

          {children}
        </Box>
      </Modal>
    </>
  )
}
