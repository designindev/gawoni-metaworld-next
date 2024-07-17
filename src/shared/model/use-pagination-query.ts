'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState, useCallback } from 'react'

export const usePaginationQuery = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const startPage = useMemo(
    () => Number(searchParams.get('page') ?? 1),
    [searchParams]
  )
  const [page, setPage] = useState(startPage)

  const onChangePage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString())
      page === 1 ? params.delete('page') : params.set('page', String(page))
      router.push(pathname + '?' + params.toString(), { scroll: false })
      setPage(page)
    },
    [pathname, router]
  )

  React.useEffect(() => {
    // searchParams.size === 0 && page !== 1 && onChangePage(1)
  }, [searchParams, page, onChangePage])

  return [page, onChangePage] as const
}
