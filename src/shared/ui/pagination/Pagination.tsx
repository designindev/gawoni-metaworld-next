'use client'

import { Pagination as PaginationMUI, PaginationItem, PaginationProps } from '@mui/material'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'

export const Pagination = (props: PaginationProps) => {
  return <PaginationMUI {...props} renderItem={(item) => <PaginationItem slots={{ previous: ChevronLeft, next: ChevronRight }} {...item} />} />
}
