'use client'

import axios from 'axios'
import { config } from 'shared/lib'

export const getPriceBySymbol = async (symbol: string, price: string): Promise<string> => {
  if (symbol == 'OKT') {
    return await axios
      .get(`${config.SITE_ENDPOINT}/api/okx/prices`)
      .then(async (response) => {
        console.log('response', response.data[0].last)
        console.log('response', (parseFloat(price) / parseFloat(response.data[0].last)).toFixed(4))
        return (parseFloat(price) / parseFloat(response.data[0].last)).toFixed(4)
      })
      .catch((error: unknown) => {
        return '100.0'
      })
  } else {
    if (symbol == 'BUSD' || symbol == 'CREDIT CARD') {
      return price
    } else {
      console.log(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol + 'BUSD'}`)
      return await axios
        .get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol + 'BUSD'}`)
        .then(async (response) => {
          return (parseFloat(price) / parseFloat(response.data.price)).toFixed(4)
        })
        .catch((error) => {
          console.log('error')
          return '100.0'
        })
    }
  }
}
