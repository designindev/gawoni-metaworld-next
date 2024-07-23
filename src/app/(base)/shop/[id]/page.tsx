import { getBgClass, NFT_COLOR, notifySuccess } from 'shared/lib'
import { ShopForm } from './ShopForm'
import { ShopCenter } from './ShopCenter'
import { ShopLeft } from './ShopLeft'

const color: NFT_COLOR = 'mystic'

const Shop = () => {
  const bgClass = getBgClass(color)

  return (
    <section className='section'>
      <div className='container'>
        <div className='row nft-detail'>
          <div className='col-lg-4 col-md-9 col-12 ml-auto mr-auto col-12 nft-detail__item nft-detail__item--center'>
            <ShopCenter bgClass={bgClass} />
          </div>
          <div className='col-lg-4 col-md-6 col-12 nft-detail__item nft-detail__item--left order-lg-first'>
            <ShopLeft bgClass={bgClass} />
          </div>
          <div className='col-lg-4 col-md-6 col-12 nft-detail__item nft-detail__item--right'>
            <ShopForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
