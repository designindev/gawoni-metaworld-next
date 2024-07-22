'use client'

import { MutableRefObject, useId, useRef } from 'react'
import ReactSelect, { GroupBase, Props } from 'react-select'
import { Button } from '../button/Button'

type SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<Option, IsMulti, Group> & {
  inputRef: MutableRefObject<any>
}

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: SelectProps<Option, IsMulti, Group>
) => {
  return (
    <>
      <ReactSelect instanceId={useId()} className='input' classNamePrefix='react-select' ref={props.inputRef} {...props} />
    </>
  )
}
