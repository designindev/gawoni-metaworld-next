import Image from 'next/image'
import { NFT } from 'entities/nft/model/nft.model'
import Link from 'next/link'
import { getBgClass, PATH_PAGE } from 'shared/lib'
import { Box, Button, Chip, Stack, Typography } from '@mui/material'

type Props = {
  nft: NFT
  hasButtons?: boolean
}

export const NftCard = ({ nft, hasButtons }: Props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        transition: 'filter .3s',
        '&:hover': {
          filter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.5))',
        },
      }}
    >
      <Box
        component={Link}
        href={PATH_PAGE.shop.slug(nft.id)}
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 4 }}
      ></Box>
      <Box
        sx={{
          borderRadius: 3,
          '&::before': {
            content: '""',
            display: 'block',
            height: 542,
          },
        }}
      >
        <Image
          src={nft.src}
          width={0}
          height={0}
          sizes='100vw'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '5px solid #777',
            borderRadius: 'inherit',
            objectFit: 'cover',
          }}
          alt=''
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '15px 15px 20px',
          background: 'rgba(20, 20, 20, 0.6)',
          borderTop: '4px solid #777',
          backdropFilter: 'blur(5px)',
          borderRadius: 3,
          zIndex: 5,
        }}
      >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={6}>
          <Typography variant='h6' component='h4' fontWeight={700} textTransform='uppercase' mr={8}>
            {nft.title}
          </Typography>
          <Box fontSize={24} fontWeight={900}>
            {nft.price}
          </Box>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1}>
          <Box fontSize={14} fontWeight={600}>
            Rarity
          </Box>
          <Box py={1} px={4} fontSize={14} borderRadius={6} className={getBgClass(nft.color)}>
            {nft.rarity}
          </Box>
        </Box>
        <Box mt={5} lineHeight={1.3}>
          <Image src={nft.logos} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
        </Box>
        <Stack direction='row' mt={6} spacing={2}>
          <Chip sx={{ width: '100%' }} label='K 4 Rally' />
          <Chip sx={{ width: '100%' }} label='Car' />
        </Stack>

        {hasButtons && (
          <Stack direction='row' mt={6} spacing={2}>
            <Button color='white' variant='outlined' size={'small'} sx={{ minWidth: '1px', width: '50%' }}>
              <i className='text-icon text-icon--edit text-icon--left'></i>
              Edit
            </Button>
            <Button color='error' variant='outlined' size={'small'} sx={{ minWidth: '1px', width: '50%' }}>
              <i className='text-icon text-icon--delete-danger text-icon--left'></i>
              Delete
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  )
}
