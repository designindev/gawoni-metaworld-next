import { games, categories, rarities } from 'entities/nft'

export const filters = [
  {
    label: 'Game',
    name: 'game',
    options: games.map((el) => ({ value: el, label: el })),
  },
  {
    label: 'Category',
    name: 'category',
    options: categories.map((el) => ({ value: el, label: el })),
  },
  {
    label: 'Rarity',
    name: 'rarity',
    options: rarities.map((el) => ({ value: el, label: el })),
  },
] as const
