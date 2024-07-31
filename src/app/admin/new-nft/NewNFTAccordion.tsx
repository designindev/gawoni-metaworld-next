import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Grid, TextField } from '@mui/material'
import { Input } from 'shared/ui'

export const NewNFTAccordion = () => {
  return (
    <>
      <Accordion expanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content'>
          Item Parameters
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={6}>
            <Grid item lg={6} xs={12}>
              <TextField label='Outlined' variant='outlined' />
              <Input type='number' name='email' label='Username or email' placeholder='Enter your username or email' />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Input type='text' name='email' label='Username or email' placeholder='Enter your username or email' />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2-content' id='panel2-header'>
          Upgrades & Boosts
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel3-content' id='panel3-header'>
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  )
}
