'use client'

import axios from 'axios'
import { config } from 'shared/lib'

export const getPriceBySymbol = async (symbol: string, price: string): Promise<string> => {
  if (symbol == 'OKT') {
    return await axios
      .get(`${config.SITE_ENDPOINT}/api/okx/prices`)
      .then(async (response) => {
        return (parseFloat(price) / parseFloat(response.data[0].last)).toFixed(4)
      })
      .catch((error: unknown) => {
        return '100.0'
      })
  } else {
    if (symbol == 'BUSD' || symbol == 'CREDIT CARD') {
      return price
    } else {
      return await axios
        .get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol + 'BUSD'}`)
        .then(async (response) => {
          return (parseFloat(price) / parseFloat(response.data.price)).toFixed(4)
        })
        .catch((error) => {
          return '100.0'
        })
    }
  }
}
