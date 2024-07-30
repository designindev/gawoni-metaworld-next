'use client'

import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import LineChart from './LineChart'
import { Filter } from 'widgets/filter/Filter'
import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { Button } from 'shared/ui'
import { Container } from '@mui/material'
import { Button as ButtonMUI } from '@mui/material'

Chart.register(CategoryScale)

export default function AdminPage() {
  return (
    <>
      <section className='section section--pb-0'>
        <Container maxWidth='xl'>
          <h1 className='h1 text-uppercase section__heading section__heading--mb-sm'>overview</h1>
          <ButtonMUI variant='text'>Text</ButtonMUI>
          <ButtonMUI variant='contained'>Contained</ButtonMUI>
          <ButtonMUI variant='outlined'>Outlined</ButtonMUI>
          <LineChart />
        </Container>
      </section>
      <section className='section'>
        <div className='container'>
          <h1 className='h1 text-uppercase section__heading section__heading--mb-sm'>All NFTs</h1>
          <Filter count={3} bg />
          <div className='row items'>
            {mockItems.map((item, i) => {
              return <NftCard key={i} nft={item} className='col-xl-3 col-lg-4 col-sm-6 col-12 item-bg--grid' hasButtons />
            })}
          </div>
          <div className='text-center mt-5'>
            <Button lgWidth>Load More</Button>
          </div>
        </div>
      </section>
    </>
  )
}
