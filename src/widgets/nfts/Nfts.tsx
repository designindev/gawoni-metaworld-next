import React from 'react'
import Image from 'next/image'

import { Category } from './Category'

export const Nfts = () => {
  return (
    <section className='section s-nfts'>
      <div className='container s-nfts__container nfts'>
        <h2 className='h2 section__heading'>
          <span className='section__heading-icon'>NFTs</span>
        </h2>
        <Category title='New nft releases' />
        <Category title='top sellers' />
      </div>
    </section>
  )
}
