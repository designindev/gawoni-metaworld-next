'use client'

import {
  Box,
  Typography,
  Modal,
  TextField,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
  Checkbox,
  Button,
  Stack,
} from '@mui/material'
import { CustomedModal, ModalProps } from './Modal'

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

export const CreateNewEditionModal = (props: Omit<ModalProps, 'children'>) => {
  return (
    <>
      <CustomedModal {...props}>
        <Typography variant='h3' fontSize={26} fontFamily={'var(--font-whyte)'}>
          Create new edition
        </Typography>
        <Stack spacing={7}>
          <TextField label='Name*' placeholder='Enter edition name' />
          <FormControl>
            <FormLabel id='colors'>Color</FormLabel>
            <RadioGroup
              defaultValue='female'
              name='colors'
              sx={{ flexDirection: 'row', justifyContent: { sm: 'space-between' }, gap: 3, flexWrap: 'wrap' }}
            >
              {colors.map((color, i) => {
                return (
                  <Radio
                    key={i}
                    value={color}
                    icon={<Box width={30} height={30} sx={{ backgroundColor: color, borderRadius: 50 }}></Box>}
                    checkedIcon={
                      <Box
                        width={30}
                        height={30}
                        sx={{ backgroundColor: color, borderRadius: 50, border: '3px solid #fff' }}
                      ></Box>
                    }
                    sx={{ padding: 0 }}
                  />
                )
              })}
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack direction={'row'} justifyContent={'flex-end'} spacing={4}>
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
