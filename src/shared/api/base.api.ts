import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CURRENT_USER_TAG, PRODUCT_TAG } from './tags'
import { baseQueryWithAccessToken } from './base.query'

export const baseApi = createApi({
  tagTypes: [CURRENT_USER_TAG, PRODUCT_TAG],
  reducerPath: 'api',
  baseQuery: baseQueryWithAccessToken,
  endpoints: () => ({}),
})
