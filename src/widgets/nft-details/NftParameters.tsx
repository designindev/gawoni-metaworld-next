'use client'

import classNames from 'classnames'
import { AccordionItem } from './AccordionItem'
import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Box, BoxProps } from '@mui/material'
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
          <Box height={'inherit'} width={'50%'} bgcolor={'secondary.main'} borderRadius={'inherit'}></Box>
        </Box>
        <Box fontSize={14} fontWeight={500}>
          BRL level: 0
        </Box>
      </Box>
      <Accordion defaultExpanded {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='large' />}>Car Parameters</AccordionSummary>
        <AccordionDetails>
          <ul className='detail-list nft-detail__list'>
            {carParameters.map((el, i) => {
              return (
                <li key={i} className='detail-list__item detail-list__item--row'>
                  <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                    {el.label}
                  </Box>
                  <div
                    className={classNames('detail-list__value text-secondary', {
                      'detail-list__value--w-150': Boolean(el.params),
                    })}
                  >
                    {el.value}
                  </div>
                  {el.params && (
                    <div className='detail-list__params'>
                      {el.params.map((el, i) => {
                        return (
                          <div key={i} className='detail-list__params-item'>
                            {el}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded {...accordionProps}>
        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='large' />}>Upgrades & Boosts</AccordionSummary>
        <AccordionDetails>
          <ul className='detail-list nft-detail__list'>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                car part slots
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                4
              </Box>
            </li>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                Parameter boosts
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                2
              </Box>
            </li>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                Parameter boosts used
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                2
              </Box>
            </li>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                Parameter boosted
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                Speed acceleration
              </Box>
            </li>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                sk4r reward bonus
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                0%
              </Box>
            </li>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                sk4r daily drop rate
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                0%
              </Box>
            </li>
            <li className='detail-list__item detail-list__item--row'>
              <Box textTransform={'uppercase'} fontSize={{ lg: 14, xs: 12 }} className='detail-list__label'>
                sk4r tournament fees reduction{' '}
              </Box>
              <Box color={'secondary.main'} className='detail-list__value'>
                0%
              </Box>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
