'use client'

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Modal,
  IconButton,
  TextField,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
} from '@mui/material'
import { COLORS } from 'shared/const'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { NewNFTModal } from './NewNFTModal'

export const NewNFTEdition = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Typography variant={'h5'} component={'h3'} sx={{ fontFamily: 'Whyte', fontWeight: '700', mb: 8 }}>
        Choose edition
      </Typography>
      <Grid spacing={8} container>
        <Grid item lg={3}>
          <Box
            onClick={handleOpen}
            sx={{
              border: '3px solid #777',
              py: 8,
              px: 8,
              cursor: 'pointer',
              transition: 'all .3s',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
              },
            }}
          >
            <IconButton aria-label='Create new edition' sx={{ backgroundColor: 'dark.main', mb: 4, width: 46, height: 46 }}>
              <AddIcon />
            </IconButton>
            <Typography variant='h3' sx={{ fontSize: '26px', fontFamily: 'Whyte' }}>
              Create new edition
            </Typography>
          </Box>
          <NewNFTModal open={open} handleClose={handleClose} />
        </Grid>
        <Grid item lg={3}>
          <Box sx={{ border: '3px solid #777', py: 8, px: 8, height: '100%' }}>
            <Box sx={{ width: 24, height: 24, backgroundColor: COLORS.primary, borderRadius: '50%', mb: 6 }}></Box>
            <Typography variant='h3' sx={{ fontSize: '26px', color: COLORS.primary }}>
              Race edition
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
