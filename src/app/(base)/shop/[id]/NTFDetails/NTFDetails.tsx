'use client'

import { Button } from 'shared/ui/button/Button'
import classNames from 'classnames'
import Link from 'next/link'
import { notifySuccess } from 'shared/lib'
import { details } from './details'

type Props = {
  bgClass: string
}

export const NTFDetails = (props: Props) => {
  const onCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    notifySuccess('Content copied to clipboard')
  }

  return (
    <div>
      <div className='nft-detail__block'>
        <h1 className='nft-detail__title h3 h3--fz-32'>k4 rally nft car - race edition #1 2023</h1>
        <div className='nft-detail__subtitle h4'>Race edition</div>
        <div className={classNames('rarity nft-detail__rarity', props.bgClass)}>
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
      <div className='nft-detail__block nft-detail__block--sm'>
        <ul className='detail-list nft-detail__list'>
          <li className='detail-list__item'>
            <div className='detail-list__label'>Additional Details</div>
            <div className='detail-list__value'>
              <p>The K4 Rally Race Editition is an easy way to get into our Game and participate in Tournaments!</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='nft-detail__block nft-detail__block--sm'>
        <ul className='detail-list nft-detail__list'>
          {details.map((el, i) => {
            return (
              <li key={i} className='detail-list__item'>
                {el.label && <div className='detail-list__label'>{el.label}</div>}
                {el.value && <div className='detail-list__value'>{el.value}</div>}
                {el.link && (
                  <>
                    <div className='detail-list__copy-link text-copy-link' onClick={() => onCopy(el.link!)}>
                      {el.link}
                      <i className='text-icon text-icon--copy text-copy-link__icon'></i>
                    </div>
                    <div className='detail-list__button'>
                      <Button color={'light'} size='sm' border>
                        Add to your wallet
                      </Button>
                    </div>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </div>
      <div className='nft-detail__block nft-detail__block--sm'>
        <ul className='detail-list nft-detail__list'>
          <li className='detail-list__item'>
            <div className='detail-list__label'>Guides</div>
            <div className='detail-list__value detail-list__value--fz-14-mobile'>
              <p>
                You don’t have a Metamask wallet? You need more information about how to register and mint a NFT? <br />
                Please refer to our{' '}
                <Link href='#' className='text-link text-primary'>
                  FAQ
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
