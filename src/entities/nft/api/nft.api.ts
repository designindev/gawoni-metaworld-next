'use client'

import { baseApi } from 'shared/api'
import { ntfMapper } from '../mapper/ntf.mapper'
import { nftRoutes } from './nft.routes'
import { NTFDto } from '../dto/ntf.dto'
import { NFT } from '../model/nft.model'

export const nftApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    nfts: build.query<NFT[], { page: number }>({
      query: ({ page }) => ({ url: nftRoutes.NFTS + '?page=' + page }),
      transformResponse: (data: NTFDto[]) => data.map(ntfMapper),
    }),
  }),
})

export const { useNftsQuery } = nftApi
