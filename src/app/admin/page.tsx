'use client'

import { Stack, Container, Row, Col } from 'react-bootstrap'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import LineChart from './LineChart'
import { Filter } from 'widgets/filter/Filter'
import { NftCard } from 'entities/nft'
import { mockItems } from 'entities/nft/api/items'
import { Button } from 'shared/ui'

Chart.register(CategoryScale)

const data = {
  labels: ['Red', 'Orange', 'Blue'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: 'Popularity of colours',
      data: [55, 23, 96],
      // you can set indiviual colors for each bar
      backgroundColor: ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.6)'],
      borderWidth: 1,
    },
  ],
}

export default function AdminPage() {
  return (
    <>
      <section className='section section--pb-0'>
        <Container>
          <h1 className='display-1 text-uppercase section__heading section__heading--mb-sm'>overview</h1>
          <LineChart />
        </Container>
      </section>
      <section className='section'>
        <Container>
          <h1 className='display-1 text-uppercase section__heading section__heading--mb-sm'>All NFTs</h1>
          <Filter count={3} bg />
          <div className='row items'>
            {mockItems.map((item, i) => {
              return <NftCard key={i} nft={item} className='col-xl-3 col-lg-4 col-sm-6 col-12 item-bg--grid' hasButtons />
            })}
          </div>
          <div className='text-center mt-5'>
            <Button lgWidth>Load More</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
