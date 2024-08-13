'use server'

import { NFT } from 'entities/nft'
import { config } from 'shared/lib'

export const getNfts = async (): Promise<{ items: NFT[] }> => {
  return await (await fetch(`${config.API_ENDPOINT}/nft/homepage`)).json()
}

export const getNft = async ({ nftId }: { nftId: string }): Promise<{ item: NFT }> => {
  return await (await fetch(`${config.API_ENDPOINT}/nft/${nftId}`)).json()
}
