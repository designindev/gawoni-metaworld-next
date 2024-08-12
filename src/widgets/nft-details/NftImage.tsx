'use client'

import Image from 'next/image'
import { Box } from '@mui/material'
import { getNftCss, NFT } from 'entities/nft'

export const NftImage = ({ nft }: { nft: NFT }) => {
  return (
    <Box
      sx={{
        ...getNftCss(nft.rarity),
        position: 'relative',
        borderRadius: 3,
        mb: 4,
        '&::before': { content: '""', display: 'block', pt: '100%' },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          border: '5px solid transparent',
        }}
      >
        {nft.video ? (
          <>
            {/* <video muted loop autoPlay style={{ width: '100%', borderRadius: 12 }}>
              <source src={nft.video} type='video/mp4' />
            </video> */}
          </>
        ) : (
          <Image
            src={nft.image}
            width={0}
            height={0}
            sizes='100vw'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 'inherit',
            }}
            alt=''
            priority
          />
        )}
      </Box>
    </Box>
  )
}
