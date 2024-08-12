import { PATH_IMAGE, PATH_VIDEO } from 'shared/lib/paths'
import { NTFDto } from '../dto/ntf.dto'
import { NFT, NFT_RARITY } from '../model/nft.model'

export const ntfMapper = (dto: NTFDto): NFT => ({
  id: dto.id,
  nft_name: dto.nft_name,
  name: dto.name,
  description: dto.description,
  image: PATH_IMAGE(dto.image),
  video: PATH_VIDEO(dto.video),
  model: dto.model,
  template_id: dto.template_id,
  template_type: dto.template_type,
  contract_name: dto.contract_name,
  contract_abi: dto.contract_abi,
  rarity: dto.rarity as NFT_RARITY,
  brl_class: dto.brl_class,
  price: dto.price,
  total_amount: dto.total_amount,
  mint_count: dto.mint_count,
  show_in_marketplace: dto.show_in_marketplace,
  homepage_order: dto.homepage_order,
  chains: dto.chains,
  template: dto.template,
})
