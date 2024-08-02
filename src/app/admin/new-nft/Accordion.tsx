import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AddIcon from '@mui/icons-material/Add'
import { AddParamentModal } from './AddParamentModal'

export const NewNFTAccordion = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content'>
          Item Parameters
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={6} alignItems={'flex-end'}>
            <Grid item lg={6} xs={12}>
              <InputNumber label='Car level' />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InputNumber label='Brl level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Speed' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Acceleration' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Drift' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Agility' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Stability' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Breaking' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <FormControl fullWidth>
                <InputLabel id='country'>Drive type</InputLabel>
                <Select labelId='demo-simple-select-label' id='country' label='Age' fullWidth>
                  <MenuItem value=''>
                    <em>Select price</em>
                  </MenuItem>
                  <MenuItem value={'AWD'}>AWD</MenuItem>
                  <MenuItem value={'AWD'}>AWD</MenuItem>
                  <MenuItem value={'AWD'}>AWD</MenuItem>
                </Select>
                {false && <FormHelperText>{'error'}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Button
                onClick={handleOpen}
                color='white'
                variant='outlined'
                size='small'
                startIcon={<AddIcon />}
                fullWidth
                sx={{ alignSelf: 'flex-start', borderWidth: '1px', height: 48 }}
              >
                Add parameter
              </Button>
              <AddParamentModal title={'Add parameter'} open={open} handleClose={handleClose} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2-content'>
          Upgrades & Boosts
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={6} alignItems={'flex-end'}>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Car part slots' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Parameter boosts' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Parameter boosts used' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <FormControl fullWidth>
                <InputLabel id='country'>Parameter boosted</InputLabel>
                <Select labelId='demo-simple-select-label' id='country' label='Age' fullWidth>
                  <MenuItem value=''>
                    <em>Select price</em>
                  </MenuItem>
                  <MenuItem value={'AWD'}>AWD</MenuItem>
                  <MenuItem value={'AWD'}>AWD</MenuItem>
                  <MenuItem value={'AWD'}>AWD</MenuItem>
                </Select>
                {false && <FormHelperText>{'error'}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item lg={3} xs={12}>
              <InputNumber label='Parameter boosts used' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='SK4R daily drop rate' value={0} />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='SK4R tournament fees reduction' value={0} />
            </Grid>
            <Grid item lg={3} xs={12}>
              <Button
                onClick={handleOpen}
                color='white'
                variant='outlined'
                size='small'
                startIcon={<AddIcon />}
                fullWidth
                sx={{ alignSelf: 'flex-start', borderWidth: '1px', height: 48 }}
              >
                Add upgrade/boost
              </Button>
              <AddParamentModal title={'Add upgrade/boost'} open={open} handleClose={handleClose} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

const InputNumber = ({ label }: { label: string }) => {
  const [value, setValue] = useState(1)

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor='component-simple'>{label}</InputLabel>
      <Box position={'relative'}>
        <OutlinedInput
          id='component-simple'
          type='number'
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          fullWidth
        />
        <Box
          position={'absolute'}
          top={5}
          right={5}
          sx={{
            cursor: 'pointer',
            transition: 'all .3s',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
          onClick={() => setValue((v) => v + 1)}
        >
          <ArrowDropUpIcon sx={{ verticalAlign: 'middle', width: '24px', heigh: '24px' }} />
        </Box>
        <Box
          position={'absolute'}
          bottom={5}
          right={5}
          sx={{
            cursor: 'pointer',
            transition: 'all .3s',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
          onClick={() => setValue((v) => v - 1)}
        >
          <ArrowDropDownIcon sx={{ verticalAlign: 'middle', width: '24px', heigh: '24px' }} />
        </Box>
      </Box>
    </FormControl>
  )
}
