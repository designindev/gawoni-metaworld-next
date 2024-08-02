'use client'

import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { CustomedModal, ModalProps } from './Modal'

type Props = Omit<ModalProps, 'children'> & {
  title: string
}

export const AddParamentModal = (props: Props) => {
  return (
    <>
      <CustomedModal {...props}>
        <Typography variant='h3' fontSize={26} fontFamily={'Whyte'}>
          {props.title}
        </Typography>
        <Stack spacing={7}>
          <TextField label='Name*' placeholder='Enter parameter name' />
          <TextField label='Value' value={'1'} />
        </Stack>
        <Stack flexDirection={'row'} justifyContent={'flex-end'} gap={4}>
          <Button
            sx={{ width: { xs: '100%', sm: 'auto' } }}
            color='white'
            variant='outlined'
            onClick={props.handleClose}
          >
            Cancel
          </Button>
          <Button sx={{ width: { xs: '100%', sm: 'auto' } }} onClick={props.handleClose}>
            Save
          </Button>
        </Stack>
      </CustomedModal>
    </>
  )
}
