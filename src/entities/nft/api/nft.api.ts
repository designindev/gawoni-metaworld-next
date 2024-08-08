'use client'

import { baseApi } from 'shared/api'
import { ntfMapper } from '../mapper/ntf.mapper'
import { nftRoutes } from './nft.routes'
import { NTFDto } from '../dto/ntf.dto'
import { NFT } from '../model/nft.model'
import { Paginated } from 'shared/model/paginated'

export const nftApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    nfts: build.query<
      Paginated<NFT>,
      { page?: number; limit?: number; game?: string; category?: string; rarity?: string }
    >({
      query: (params) => ({ url: nftRoutes.NFTS, params }),
      transformResponse: (response: Paginated<NTFDto>) => ({ ...response, data: response.data.map(ntfMapper) }),
    }),
  }),
})

export const { useNftsQuery } = nftApi
