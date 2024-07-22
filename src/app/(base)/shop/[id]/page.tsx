'use client'

import Image from 'next/image'
import ImageCar from './image.jpg'
import { Button } from 'shared/ui/button/Button'
import { getBgClass, NFT_COLOR, notifySuccess } from 'shared/lib'
import classNames from 'classnames'
import Link from 'next/link'
import ReactSelect, { GroupBase, Props } from 'react-select'
import { useEffect, useId, useState } from 'react'

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

const carParameters = [
  { label: 'SPEED', value: '1', params: ['1', '50', '150'] },
  { label: 'ACCELERATION', value: '1', params: ['1', '50', '150'] },
  { label: 'DRIFT', value: '1', params: ['1', '50', '150'] },
  { label: 'agility', value: '1', params: ['1', '50', '150'] },
  { label: 'stability', value: '1', params: ['1', '50', '150'] },
  { label: 'breaking', value: '1', params: ['1', '50', '150'] },
  { label: 'Drive type', value: 'AWD' },
]
const color: NFT_COLOR = 'mystic'

type a = typeof ReactSelect

const MySelect = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Props<Option, IsMulti, Group>) => {
  return (
    <>
      <ReactSelect instanceId={useId()} className='input' classNamePrefix='react-select' name='select-1' {...props} />
    </>
  )
}

const Shop = () => {
  const bgClass = getBgClass(color)

  const onCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    notifySuccess('Content copied to clipboard')
  }
  const id = Date.now().toString()

  return (
    <section className='section'>
      <div className='container'>
        <div className='row nft-detail'>
          <div className='col-lg-4 col-md-6 col-12 nft-detail__item nft-detail__item--left'>
            <div className='nft-detail__block'>
              <h1 className='nft-detail__title h3 h3--fz-32'>k4 rally nft car - race edition #1 2023</h1>
              <div className='nft-detail__subtitle h4'>Race edition</div>
              <div className={classNames('rarity nft-detail__rarity', bgClass)}>
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
                            <Button color='white' size='sm' border>
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
                  <div className='detail-list__value'>
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
          <div className='col-lg-4 col-md-6 col-sm-10 col-12 ml-auto mr-auto col-12 nft-detail__item nft-detail__item--center'>
            <div className={classNames('image image--cover image--square image--border nft-detail__image', bgClass)}>
              <Image src={ImageCar} alt='' priority />
            </div>
            <div className='progress-bar nft-detail__progress-bar'>
              <div className='progress-bar__label'>
                Car level: <span className='text-secondary'>1</span>
              </div>
              <div className='progress-bar__line'>
                <div className='progress-bar__line-fill' style={{ width: '26%' }}></div>
              </div>
              <div className='progress-bar__label progress-bar__label--sm'>BRL level: 0</div>
            </div>
            <div className='nft-detail__block nft-detail__accordion nft-detail__block--sm'>
              <h4 className='nft-detail__block-title h6'>
                Car Parameters <i className='text-icon text-icon--chevron text-icon--chevron-down text-icon--md'></i>
              </h4>
              <ul className='detail-list nft-detail__list'>
                {carParameters.map((el, i) => {
                  return (
                    <li key={i} className='detail-list__item detail-list__item--row'>
                      <div className='detail-list__label text-uppercase'>{el.label}</div>
                      <div
                        className={classNames('detail-list__value text-secondary', {
                          'detail-list__value--w-150': Boolean(el.params),
                        })}
                      >
                        {el.value}
                      </div>
                      {el.params && (
                        <div className='detail-list__params'>
                          {el.params.map((el, i) => {
                            return (
                              <div key={i} className='detail-list__params-item'>
                                {el}
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='nft-detail__block nft-detail__accordion nft-detail__block--sm'>
              <h4 className='nft-detail__block-title h6'>
                Upgrades & Boosts <i className='text-icon text-icon--chevron text-icon--chevron-down text-icon--md'></i>
              </h4>
              <ul className='detail-list nft-detail__list'>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>car part slots</div>
                  <div className='detail-list__value text-secondary'>4</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>Parameter boosts</div>
                  <div className='detail-list__value text-secondary'>2</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>Parameter boosts used</div>
                  <div className='detail-list__value text-secondary'>2</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>Parameter boosted</div>
                  <div className='detail-list__value text-secondary'>Speed acceleration</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>sk4r reward bonus</div>
                  <div className='detail-list__value text-secondary'>0%</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>sk4r daily drop rate</div>
                  <div className='detail-list__value text-secondary'>0%</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label text-uppercase'>sk4r tournament fees reduction </div>
                  <div className='detail-list__value text-secondary'>0%</div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-12 nft-detail__item nft-detail__item--right'>
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className='nft-detail__block form'
            >
              <div className='form__input form__input--mb-sm'>
                <div className='input-label'>Select Blockchain</div>
                <MySelect
                  name='select-1'
                  defaultValue={{ value: 'Binance Smart Chain (BEP20)', label: 'Binance Smart Chain (BEP20)' }}
                  options={[
                    { value: 'Binance Smart Chain (BEP20)', label: 'Binance Smart Chain (BEP20)' },
                    { value: 'Polygon', label: 'Polygon' },
                    { value: 'Etherum Mainnet', label: 'Etherum Mainnet' },
                    { value: 'OKX Chain', label: 'OKX Chain' },
                  ]}
                />
              </div>
              <div className='form__input form__input--mb-sm'>
                <div className='input-label'>Select Currency</div>
                <MySelect
                  name='select-2'
                  defaultValue={{ value: 'BNB', label: 'BNB' }}
                  options={[
                    { value: 'BNB', label: 'BNB' },
                    { value: 'Bitcoin', label: 'Bitcoin' },
                    { value: 'Etherum', label: 'Etherum' },
                  ]}
                />
              </div>
              <ul className='detail-list nft-detail__list nft-detail__list-mt-lg'>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Price</div>
                  <div className='detail-list__value'>$20.00 (0.0794 BNB)</div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Quantity</div>
                  <div className='detail-list__value'>
                    <div className='input-count'>
                      <button className='input-count__operation input-count__operation--minus'>
                        <i className='text-icon text-icon--minus'></i>
                      </button>
                      <input type='text' className='input-count__input' value='1' onChange={() => {}} />
                      <button className='input-count__operation input-count__operation--plus'>
                        <i className='text-icon text-icon--plus'></i>
                      </button>
                    </div>
                  </div>
                </li>
                <li className='detail-list__item detail-list__item--row'>
                  <div className='detail-list__label'>Total</div>
                  <div className='detail-list__value text-secondary detail-list__value--fz-24 text-right'>$20.00 (0.0794 BNB)</div>
                </li>
              </ul>
              <div className='nft-detail__button'>
                <Button maxWidth>MINT</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
