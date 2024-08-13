import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CURRENT_USER_TAG } from './tags'
import { config } from 'shared/lib'

export const baseApi = createApi({
  tagTypes: [CURRENT_USER_TAG],
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: config.API_ENDPOINT }),
  endpoints: () => ({}),
})
