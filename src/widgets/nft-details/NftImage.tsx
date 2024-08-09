'use client'

import Image from 'next/image'
import ImageCar from 'shared/images/nft-detail/image.jpg'
import { Box } from '@mui/material'
import { getNftCss } from 'entities/nft'

export const NftImage = () => {
  return (
    <Box
      sx={{
        ...getNftCss('Mystic'),
        position: 'relative',
        borderRadius: 3,
        mb: 4,
        '&::before': { content: '""', display: 'block', pt: '100%' },
      }}
    >
      <Image
        src={ImageCar}
        width={0}
        height={0}
        sizes='100vw'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          padding: 5,
          borderRadius: 'inherit',
        }}
        alt=''
        priority
      />
    </Box>
  )
}
