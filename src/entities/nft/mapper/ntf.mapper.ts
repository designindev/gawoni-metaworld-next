import { NTFDto } from '../dto/ntf.dto'
import { NFT } from '../model/nft.model'

export const ntfMapper = (dto: NTFDto): NFT => ({
  id: dto.id,
  src: dto.src,
  title: dto.title,
  price: dto.price,
  rarity: dto.rarity,
  logos: dto.logos,
  color: dto.color,
})
