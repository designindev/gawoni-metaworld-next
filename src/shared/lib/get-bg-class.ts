export type NFT_COLOR = 'common' | 'uncommon' | 'rare' | 'epic' | 'signaure' | 'legendary' | 'mystic' | 'one-of-a-kind'

export const getBgClass = (color: NFT_COLOR) => `bg-${color}`
