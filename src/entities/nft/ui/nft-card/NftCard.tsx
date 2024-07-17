import Image from 'next/image'
import React from 'react'
import classNames from 'classnames'
import { NFT } from 'entities/nft/model/nft.model'

type Props = {
  nft: NFT
  className?: string
}

export const NftCard = (props: Props) => {
  const { nft, className } = props

  return (
    <div
      className={classNames(
        'items__item item-bg item-bg--p-0 nfts__items-item',
        className
      )}
    >
      <div className='items__img image image--cover nfts__items-img'>
        <Image
          src={nft.src}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          alt=''
        />
      </div>
      <div className='items__text nfts__items-text'>
        <div className='nfts__items-top'>
          <h4 className='items__title h5 text-title nfts__items-title'>
            {nft.title}
          </h4>
          <div className='nfts__items-price'>{nft.price}</div>
        </div>
        <div className='nfts__items-rarity'>
          <div className='nfts__items-rarity-label'>Rarity</div>
          <div
            className={classNames('nfts__items-rarity-value', {
              [`nfts__items-rarity-value--${nft.color}`]: nft.color,
            })}
          >
            {nft.rarity}
          </div>
        </div>
        <div className='nfts__items-logos'>
          <Image
            src={nft.logos}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt=''
          />
        </div>
        <div className='nfts__items-buttons'>
          <div className='nfts__items-button'>K 4 Rally</div>
          <div className='nfts__items-button'>Car</div>
        </div>
      </div>
    </div>
  )
}
