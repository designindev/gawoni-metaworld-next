'use client'

import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { notifySuccess } from 'shared/lib'

type Detail = { label?: string; value?: string; link?: string }

const details: Detail[] = [
  {
    label: 'Contract Details',
    value: 'Binance Smart Chain (BEP20):',
    link: '0x8c73b5b7b4958d78d66ade3738f9258f005f64751c63acb5eed51c6dcdda9759',
  },
  {
    value: 'Polygon:',
    link: '0x8c73b5b7b4958d78d66ade3738f9258f005f64751c63acb5eed51c6dcdda9759',
  },
  {
    value: 'Etherum Mainnet:',
    link: '0x8c73b5b7b4958d78d66ade3738f9258f005f64751c63acb5eed51c6dcdda9759',
  },
  {
    value: 'OKX Chain:',
    link: '0x8c73b5b7b4958d78d66ade3738f9258f005f64751c63acb5eed51c6dcdda9759',
  },
]

// TODO: MOVE TO PROFILE LATER
const Details = () => {
  const onCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    notifySuccess('Content copied to clipboard')
  }

  return (
    <ul className='detail-list nft-detail__list'>
      {details.map((el, i) => {
        return (
          <li key={i} className='detail-list__item'>
            {el.value && <div className='detail-list__value'>{el.value}</div>}
            {el.link && (
              <>
                <Box position={'relative'}>
                  <Box pr={8} textOverflow={'ellipsis'} overflow={'hidden'} minHeight={20}>
                    {el.link}
                  </Box>
                  <Box
                    component={IconButton}
                    position={'absolute'}
                    bottom={-5}
                    right={-5}
                    onClick={() => onCopy(el.link!)}
                  >
                    <ContentCopyIcon />
                  </Box>
                </Box>
                <div className='detail-list__button'>
                  <Button color='white' variant={'outlined'} size='small'>
                    Add to your wallet
                  </Button>
                </div>
              </>
            )}
          </li>
        )
      })}
    </ul>
  )
}
