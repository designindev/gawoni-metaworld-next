import Image from 'next/image'
import classNames from 'classnames'
import { NFT } from 'entities/nft/model/nft.model'
import Link from 'next/link'
import { getBgClass, PATH_PAGE } from 'shared/lib'
import { Button } from 'shared/ui'

type Props = {
  nft: NFT
  className?: string
  hasButtons?: boolean
}

export const NftCard = ({ nft, className, hasButtons }: Props) => {
  return (
    <div className={classNames('items__item item-bg item-bg--p-0 nfts__items-item', className)}>
      <Link href={PATH_PAGE.shop.slug(nft.id)} className='nfts__items-link'></Link>
      <div className='items__img image image--cover nfts__items-img'>
        <Image src={nft.src} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
      </div>
      <div className='items__text nfts__items-text'>
        <div className='nfts__items-top'>
          <h4 className='items__title h5 text-title nfts__items-title'>{nft.title}</h4>
          <div className='nfts__items-price'>{nft.price}</div>
        </div>
        <div className='nfts__items-rarity'>
          <div className='nfts__items-rarity-label'>Rarity</div>
          <div
            className={classNames('nfts__items-rarity-value', {
              [getBgClass(nft.color)]: nft.color,
            })}
          >
            {nft.rarity}
          </div>
        </div>
        <div className='nfts__items-logos'>
          <Image src={nft.logos} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
        </div>
        <div className='nfts__items-tags'>
          <div className='nfts__items-tag'>K 4 Rally</div>
          <div className='nfts__items-tag'>Car</div>
        </div>
        {hasButtons && (
          <div className='nfts__items-buttons'>
            <div className='nfts__items-button'>
              <Button color='light' border>
                <i className='text-icon text-icon--edit text-icon--left'></i>
                Edit
              </Button>
            </div>
            <div className='nfts__items-button'>
              <Button color='danger' size='sm' border>
                <i className='text-icon text-icon--delete-danger text-icon--left'></i>
                Delete
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
