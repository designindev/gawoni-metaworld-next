import Image1 from 'shared/images/nfts/nfts-1.jpg'
import Image2 from 'shared/images/nfts/nfts-2.jpg'
import Image3 from 'shared/images/nfts/nfts-3.jpg'
import Image4 from 'shared/images/nfts/nfts-4.jpg'
import Logos from 'shared/images/nfts/logos.png'
import { NFT } from '../model/nft.model'

export const mockItems: NFT[] = [
  {
    id: '1',
    src: Image1.src,
    title: 'K 4 Race edition #1',
    price: '$201',
    rarity: 'Epic',
    logos: Logos.src,
    color: 'epic',
  },
  {
    id: '2',
    src: Image2.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Rare',
    logos: Logos.src,
    color: 'rare',
  },
  {
    id: '3',
    src: Image3.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'One of a kind',
    logos: Logos.src,
    color: 'one-of-a-kind',
  },
  {
    id: '4',
    src: Image4.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Signature',
    logos: Logos.src,
    color: 'signature',
  },
  {
    id: '5',
    src: Image2.src,
    title: 'K 4 Race edition #1',
    price: '$20123',
    rarity: 'Epic',
    logos: Logos.src,
    color: 'epic',
  },
  {
    id: '6',
    src: Image2.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Rare',
    logos: Logos.src,
    color: 'rare',
  },
  {
    id: '7',
    src: Image2.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'One of a kind',
    logos: Logos.src,
    color: 'one-of-a-kind',
  },
  {
    id: '8',
    src: Image2.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Signature',
    logos: Logos.src,
    color: 'signature',
  },
]
