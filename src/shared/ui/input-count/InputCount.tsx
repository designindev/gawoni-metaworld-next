import React, { InputHTMLAttributes, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const InputCount = (props: Props) => {
  const [value, setValue] = useState(0)

  return (
    <div className='input-count'>
      <button className='input-count__operation input-count__operation--minus' onClick={() => setValue((v) => v - 1)}>
        <i className='text-icon text-icon--minus'></i>
      </button>
      <input
        type='number'
        className='input-count__input'
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value))
          props.onChange && props.onChange(e)
        }}
        {...props}
      />
      <button className='input-count__operation input-count__operation--plus' onClick={() => setValue((v) => v + 1)}>
        <i className='text-icon text-icon--plus'></i>
      </button>
    </div>
  )
}
