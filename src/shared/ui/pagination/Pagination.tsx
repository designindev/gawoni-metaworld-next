'use client'

import classNames from 'classnames'
import { usePagination } from 'shared/model'
import './Pagination.scss'

export type PaginationProps = {
  page?: number
  count?: number
  limit?: number
  lastPage?: number
  siblingCount?: number
  selectedPages?: number[]
  onChangePage?: (page: number) => void
  className?: string
}

export const Pagination = ({ count, page, limit, lastPage, onChangePage, siblingCount, selectedPages, className }: PaginationProps) => {
  const { items: pageNumbers } = usePagination({
    count,
    defaultPage: page,
    page,
    lastPage,
    selectedPages,
    siblingCount,
    limit,
    onChange: onChangePage,
  })

  return (
    <div className={classNames('pagination', className)}>
      {pageNumbers.map(({ type, clickPage, selected, ...props }, i) => {
        return type === 'page' ? (
          <button
            key={i}
            {...props}
            className={classNames('pagination__page pagination__page--number', {
              'pagination__page--selected': selected,
            })}
          >
            {clickPage}
          </button>
        ) : type === 'first' || type === 'prev' || type === 'next' || type === 'last' ? (
          <button
            key={i}
            className={classNames(`pagination__page pagination__page--arrow pagination__page--arrow-${type}`, {
              'pagination__page--disabled': props.disabled,
            })}
            {...props}
          ></button>
        ) : (
          <div className='pagination__page pagination__page--ellipsis' key={i}>
            ...
          </div>
        )
      })}
    </div>
  )
}
