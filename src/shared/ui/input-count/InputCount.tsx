import React, { InputHTMLAttributes, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const InputCount = (props: Props) => {
  const [value, setValue] = useState(0)

  return (
    <div className='input-count' style={{ color: '#fff' }}>
      <button className='input-count__operation input-count__operation--minus' onClick={() => setValue((v) => v - 1)}>
        <RemoveIcon />
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
        <AddIcon />
      </button>
    </div>
  )
}
