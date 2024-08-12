import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from 'shared/lib'

export const baseQueryWithAccessToken = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
})
