'use client'

import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Box, BoxProps, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const carParameters = [
  { label: 'SPEED', value: '1', params: ['1', '50', '150'] },
  { label: 'ACCELERATION', value: '1', params: ['1', '50', '150'] },
  { label: 'DRIFT', value: '1', params: ['1', '50', '150'] },
  { label: 'agility', value: '1', params: ['1', '50', '150'] },
  { label: 'stability', value: '1', params: ['1', '50', '150'] },
  { label: 'breaking', value: '1', params: ['1', '50', '150'] },
  { label: 'Drive type', value: 'AWD' },
]

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

export const NftParameters = () => {
  return (
    <>
      <Box mb={10}>
        <Box fontSize={18} fontWeight={500}>
          Car level:{' '}
          <Box component={'span'} sx={{ color: 'secondary.main' }}>
            1
          </Box>
        </Box>
        <Box height={10} bgcolor={'#fff'} borderRadius={1000} my={2}>
          <Box height={'inherit'} width={'33%'} bgcolor={'secondary.main'} borderRadius={'inherit'}></Box>
        </Box>
        <Box fontSize={14} fontWeight={500}>
          BRL level: 0
        </Box>
      </Box>
      <Accordion defaultExpanded {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='large' />}>Car Parameters</AccordionSummary>
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
                    sx={[
                      Boolean(el.params) && {
                        width: { lg: 150, sm: 70, xs: 60 },
                        px: 1,
                      },
                    ]}
                  >
                    {el.value}
                  </Box>
                  {el.params && (
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      width={120}
                      borderBottom={'1px solid #fff'}
                    >
                      {el.params.map((el, i) => {
                        return (
                          <div key={i} className='detail-list__params-item'>
                            {el}
                          </div>
                        )
                      })}
                    </Stack>
                  )}
                </Stack>
              )
            })}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='large' />}>Upgrades & Boosts</AccordionSummary>
        <AccordionDetails>
          <Stack component={'ul'} spacing={4}>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                car part slots
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                4
              </Box>
            </Stack>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                Parameter boosts
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                2
              </Box>
            </Stack>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                Parameter boosts used
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                2
              </Box>
            </Stack>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                Parameter boosted
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                Speed acceleration
              </Box>
            </Stack>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                sk4r reward bonus
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                0%
              </Box>
            </Stack>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                sk4r daily drop rate
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                0%
              </Box>
            </Stack>
            <Stack
              component={'li'}
              direction={'row'}
              spacing={1}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box textTransform={'uppercase'} color={'#aaa'} fontSize={{ lg: 14, xs: 12 }} fontWeight={600}>
                sk4r tournament fees reduction{' '}
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                0%
              </Box>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
