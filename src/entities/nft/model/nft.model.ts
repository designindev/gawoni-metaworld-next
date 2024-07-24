import { NFT_COLOR } from 'shared/lib'

export type NFTId = string

export type NFT = {
  id: NFTId
  src: string
  title: string
  price: string
  rarity: string
  logos: string
  color: NFT_COLOR
}
