export type NTFDto = {
  id: number
  nft_name: string
  name: string
  description: string
  image: string
  video: string
  model: string
  template_id: number
  template_type: string
  contract_name: string
  contract_abi: string
  rarity: string
  brl_class: number
  price: string
  total_amount: number
  mint_count: number
  show_in_marketplace: number
  homepage_order: number
  chains: {
    id: number
    nft_id: number
    chain: string
    value: number
    coins: string
    contract_address: string
    label: string
    // TODO:
    // {
    //   name: string
    //   testnet: boolean
    // }
  }[]
  template: {
    id: number
    prefab: string
    level: number
    acceleration: number
    agility: number
    braking: number
    drift: number
    drive_type: string
    endurance: number
    speed: number
    stability: number
    acceleration_boosts: number
    agility_boosts: number
    braking_boosts: number
    drift_boosts: number
    endurance_boosts: number
    speed_boosts: number
    stability_boosts: number
    total_boosts: number
    used_boosts: number
    part_slots: number
    k4r_reward_bonus: number
    brl_daily_drop_bonus: number
    brl_tournament_fees_reduction: number
  }
}
