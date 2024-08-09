import { CSSProperties } from 'react'

export type NFTId = string

export type NFT = {
  id: NFTId
  src: string
  title: string
  price: string
  rarity: NFT_RARITY
  logos: string
}

export type NFT_RARITY =
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Epic'
  | 'Signature'
  | 'Legendary'
  | 'Mystic'
  | 'One-of-a-kind'

export const rarities: NFT_RARITY[] = [
  'Common',
  'Uncommon',
  'Rare',
  'Epic',
  'Signature',
  'Legendary',
  'Mystic',
  'One-of-a-kind',
]
export const games = ['K 4 rally', 'Tuk tuk rush', 'Racing game', 'Martial arts game']
export const categories = ['Category 1', 'Category 2', 'Category 3']

const mapNftColor: Record<NFT_RARITY, string> = {
  Common: '#7B8077',
  Uncommon: '#00bf13',
  Rare: '#0038ff',
  Epic: '#a700e2',
  Signature: '#fff',
  Legendary: '#ff881a',
  Mystic: 'linear-gradient(130.42deg, #ce9335 0%, #fee5ac 49.12%, #ce9335 98.25%)',
  'One-of-a-kind':
    'linear-gradient(129.5deg, #2e62f6 0%, #fa9ffb 20%, #7df0cf 40%, #fbfecf 60%, #fcd9f1 80%, #91cdf7 100%)',
}

export const getNftColor = (rarity: NFT_RARITY) => mapNftColor[rarity]

export const getNftCss = (rarity: NFT_RARITY): CSSProperties => ({
  background: getNftColor(rarity) ?? mapNftColor['Common'],
  color: ['One-of-a-kind', 'Signature', 'Mystic', 'Legendary'].includes(rarity) ? '#000' : '#fff',
})
