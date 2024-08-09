import { NextResponse } from 'next/server'
import { getCountFromServer, getDocs, limit, orderBy, query, startAfter, startAt, where } from 'firebase/firestore'
import { nftsRef } from './db'

type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T // from lodash

const truthy = <T>(value: T): value is Truthy<T> => Boolean(value)

const defaultLimit = 8
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page') ?? 1)
  const lim = Number(searchParams.get('limit') ?? defaultLimit)
  const game = searchParams.get('game')
  const category = searchParams.get('category')
  const rarity = searchParams.get('rarity')

  const queries = [
    game && where('game', '==', game),
    category && where('category', '==', category),
    rarity && where('rarity', '==', rarity),
    orderBy('title', 'asc'),
  ].filter(truthy)

  const documentSnapshots = await getDocs(query(nftsRef, ...queries, limit((page - 1) * lim || 1)))
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]

  const data = await getDocs(query(nftsRef, ...queries, startAfter(lastVisible), limit(lim)))

  const count = (await getCountFromServer(query(nftsRef, ...queries))).data().count
  const numPages = Math.ceil(count / lim)

  return NextResponse.json({
    count,
    limit: lim,
    page,
    lastPage: numPages,
    data: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
  })
}
