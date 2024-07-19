import Image from 'next/image'
import ImageCar from './image.jpg'
import { Button } from 'shared/ui/button/Button'

const Shop = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='row nft-detail'>
          <div className='col-lg-4 col-12 nft-detail__item nft-detail__item--left'>
            <div className='nft-detail__block'>
              <h1 className='nft-detail__title h3 h3--fz-32'>k4 rally nft car - race edition #1 2023</h1>
              <div className='nft-detail__subtitle h4'>Race edition</div>
              <div className='rarity nft-detail__rarity'>
                <div className='rarity__label'>Mystic</div>
                <div className='rarity__price'>$20.00</div>
              </div>
              <ul className='detail-list nft-detail__list'>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Edition</div>
                  <div className='detail-list__value'>K4 Rally NFT Car - Race Edition #1 2023</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Car Model</div>
                  <div className='detail-list__value'>Monsun</div>
                </li>
              </ul>
            </div>
            <div className='nft-detail__block'>
              <ul className='detail-list nft-detail__list'>
                <li className='detail-list__item'>
                  <div className='detail-list__label'>Additional Details</div>
                  <div className='detail-list__value'>The K4 Rally Race Editition is an easy way to get into our Game and participate in Tournaments!</div>
                </li>
              </ul>
            </div>
            <div className='nft-detail__block'>
              <ul className='detail-list nft-detail__list'>
                <li className='detail-list__item'>
                  <div className='detail-list__label'>Contract Details</div>
                  <div className='detail-list__value'>Binance Smart Chain (BEP20):</div>
                </li>
              </ul>
            </div>
            <div className='nft-detail__block'>
              <ul className='detail-list nft-detail__list'>
                <li className='detail-list__item'>
                  <div className='detail-list__label'>Guides</div>
                  <div className='detail-list__value'>
                    <p>
                      You don’t have a Metamask wallet? You need more information about how to register and mint a NFT? Please refer to our{' '}
                      <a href='' className='text-link text-primary'>
                        FAQ
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-12 nft-detail__item nft-detail__item--center'>
            <div className='image image--cover image--square image--border nft-detail__image bg--one-of-a-kind'>
              <Image src={ImageCar} alt='' priority />
            </div>
            <div className='nft-detail__level'>
              <div className='nft-detail__level-label'>
                Car level: <span className='text-secondary'>1</span>
              </div>
              <div className='nft-detail__level-progress-bar'></div>
              <div className='nft-detail__level-label nft-detail__level-label--sm'>BRL level: 0</div>
            </div>
          </div>
          <div className='col-lg-4 col-12 nft-detail__item nft-detail__item--right'>
            <div className='nft-detail__block'>
              <ul className='detail-list nft-detail__list'>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Price</div>
                  <div className='detail-list__value'>$20.00 (0.0794 BNB)</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Quantity</div>
                  <div className='detail-list__value'>$20.00 (0.0794 BNB)</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Total</div>
                  <div className='detail-list__value'>$20.00 (0.0794 BNB)</div>
                </li>
              </ul>
              <div className='nft-detail__button'>
                <Button maxWidth>MINT</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
