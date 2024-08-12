'use client'

import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Box, BoxProps, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NFT } from 'entities/nft'

const accordionProps = {
  sx: {
    mb: 5,
    '&:last-child': {
      marginBottom: 0,
    },
    borderRadius: 5,
    '&:first-of-type': {
      borderRadius: 5,
      margin: '0',
      mb: 5,
    },
    '&:last-of-type': {
      borderRadius: 5,
    },
    '&.Mui-expanded': {
      margin: 0,
      mb: 5,
    },
  },
}

// TODO: MOVE TO SHARED
const findProgressbarWidth = (portion: number, total = 100) => (portion / total) * 100

export const NftParameters = ({ nft }: { nft: NFT }) => {
  const { template: carTemplate } = nft

  const carParameters = [
    { label: 'Speed', value: carTemplate.speed },
    { label: 'Acceleration', value: carTemplate.acceleration },
    { label: 'Drift', value: carTemplate.drift },
    { label: 'Agility', value: carTemplate.agility },
    { label: 'Stability', value: carTemplate.stability },
    { label: 'Braking', value: carTemplate.braking },
  ]

  const upgradesAndBoosts = [
    { label: 'Car part slots', value: carTemplate.part_slots },
    { label: 'Parameter boosts', value: carTemplate.total_boosts },
    { label: 'Parameter boosts used', value: carTemplate.part_slots },
    { label: 'Parameter boosted', value: 'Free Selection' },
    { label: 'sk4r reward bonus', value: carTemplate.k4r_reward_bonus },
    { label: 'sk4r daily drop rate', value: carTemplate.brl_daily_drop_bonus },
    { label: 'sk4r tournament fees reduction', value: carTemplate.brl_tournament_fees_reduction },
  ]

  return (
    <>
      <Box mb={10}>
        <Box fontSize={18} fontWeight={500}>
          Car level:{' '}
          <Box component={'span'} sx={{ color: 'secondary.main' }}>
            {carTemplate.level}
          </Box>
        </Box>
        <Box height={10} bgcolor={'#fff'} borderRadius={1000} my={2}>
          <Box
            height={'inherit'}
            width={`${findProgressbarWidth(carTemplate.level, 10)}%`}
            bgcolor={'secondary.main'}
            borderRadius={'inherit'}
          ></Box>
        </Box>
        <Box fontSize={14} fontWeight={500}>
          BRL level: {nft.brl_class}
        </Box>
      </Box>
      <Accordion defaultExpanded {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 24 }} />}>Car Parameters</AccordionSummary>
        <AccordionDetails>
          <Stack component={'ul'} spacing={4}>
            {carParameters.map((el, i) => {
              return (
                <Stack
                  key={i}
                  component={'li'}
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                    {el.label}
                  </Box>
                  <Box
                    color={'secondary.main'}
                    textAlign={'center'}
                    ml={'auto!important'}
                    sx={{ width: { lg: 150, sm: 70, xs: 60 }, px: 1 }}
                  >
                    {el.value}
                  </Box>
                  <Box>
                    <Stack direction={'row'} justifyContent={'space-between'} width={120}>
                      <Box>1</Box>
                      <Box>50</Box>
                      <Box>100</Box>
                    </Stack>
                    <Box height={4} bgcolor={'#fff'} mt={1}>
                      <Box
                        bgcolor={'secondary.main'}
                        height={'100%'}
                        width={`${findProgressbarWidth(el.value)}%`}
                      ></Box>
                    </Box>
                  </Box>
                </Stack>
              )
            })}
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                Drive type
              </Box>
              <Box color={'secondary.main'} textAlign={'center'} ml={'auto!important'}>
                {carTemplate.drive_type}
              </Box>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 24 }} />}>Upgrades & Boosts</AccordionSummary>
        <AccordionDetails>
          <Stack component={'ul'} spacing={4}>
            {upgradesAndBoosts.map((el, i) => {
              return (
                <Stack
                  key={i}
                  component={'li'}
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                    {el.label}
                  </Box>
                  <Box color={'secondary.main'} className='detail-list__value'>
                    {el.value}
                  </Box>
                </Stack>
              )
            })}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
