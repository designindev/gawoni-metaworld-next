import { Games } from '@/widgets/games/Games'
import { Main } from '@/widgets/main/Main'
import { News } from '@/widgets/news/News'
import { Nfts } from '@/widgets/nfts/Nfts'

export default function Home() {
  return (
    <main>
      <Main />
      <Games />
      <News />
      <Nfts />
    </main>
  )
}
