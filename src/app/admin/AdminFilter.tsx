'use client'
import React, { useState } from 'react'
import { ActionMeta, SingleValue } from 'react-select'
import { Filter } from 'widgets'

export const AdminFilter = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const count = Object.values(filters).filter((el) => el).length

  const onChangeFilter = (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => {
    const name = actionMeta.name
    if (!name) return
    if (actionMeta.action === 'select-option') setFilters((prev) => ({ ...prev, [name]: newValue?.value || '' }))
    if (actionMeta.action === 'clear') setFilters((prev) => ({ ...prev, [name]: '' }))
  }

  return <Filter count={count} onChange={onChangeFilter} bg />
}
