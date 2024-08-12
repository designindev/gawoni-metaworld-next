'use client'

import { baseApi } from 'shared/api'
import { ntfMapper } from '../mapper/ntf.mapper'
import { nftRoutes } from './nft.routes'
import { NTFDto } from '../dto/ntf.dto'
import { NFT } from '../model/nft.model'
import { Paginated } from 'shared/model/paginated'

export const nftApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchNfts: build.query<
      Paginated<NFT>,
      { page?: number; limit?: number; game?: string; category?: string; rarity?: string }
    >({
      query: (params) => ({ url: nftRoutes.fetchNfts, params }),
      transformResponse: (response: { items: NTFDto[]; total: number }) => ({
        ...response,
        // TODO: FIX IT
        lastPage: 1,
        limit: 1,
        page: 1,
        count: response.total,
        data: response.items.map(ntfMapper),
      }),
    }),
    fetchNft: build.query<NFT, { nftId: string }>({
      query: ({ nftId }) => ({ url: nftRoutes.fetchNft(nftId) }),
      transformResponse: (response: { item: NTFDto }) => ntfMapper(response.item),
    }),
  }),
})

export const { useFetchNftsQuery, useFetchNftQuery } = nftApi
