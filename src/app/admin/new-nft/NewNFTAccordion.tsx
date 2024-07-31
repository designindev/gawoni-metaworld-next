import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FormControl, Grid, Input, InputLabel, TextField } from '@mui/material'
import { Input as InputUI } from 'shared/ui'

export const NewNFTAccordion = () => {
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content'>
          Item Parameters
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={6}>
            <Grid item lg={6} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2-content' id='panel2-header'>
          Upgrades & Boosts
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={6}>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
            <Grid item lg={3} xs={12}>
              <TextField label='Car level' />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
