import { getBgClass, NFT_COLOR } from 'shared/lib'
import { NTFForm } from './NTFForm/NTFForm'
import { NTFParameters } from './NTFParameters/NTFParameters'
import { NTFDetails } from './NTFDetails/NTFDetails'
import { Box, Container } from '@mui/material'

const color: NFT_COLOR = 'mystic'

const Shop = () => {
  const bgClass = getBgClass(color)

  return (
    <Box component='section' className='section'>
      <Container>
        <div className='row nft-detail'>
          <div className='col-lg-4 col-md-9 col-12 ml-auto mr-auto col-12 nft-detail__item nft-detail__item--center'>
            <NTFParameters bgClass={bgClass} />
          </div>
          <div className='col-lg-4 col-md-6 col-12 nft-detail__item nft-detail__item--left order-lg-first'>
            <NTFDetails bgClass={bgClass} />
          </div>
          <div className='col-lg-4 col-md-6 col-12 nft-detail__item nft-detail__item--right'>
            <NTFForm />
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Shop
