import { Chip, Stack } from '@mui/material'
import React from 'react'

export const GameInfo = () => {
  return (
    <div className='game-details__info'>
      <Stack direction='row' mt={6} spacing={2}>
        <Chip label='Racing' />
        <Chip label='Blockchain game' />
      </Stack>

      <ul className='short-info game-details__short-info'>
        <li className='short-info__item'>
          <h5 className='short-info__label'>developer</h5>
          <div className='short-info__value'>GAWOONI MetaLabs</div>
        </li>
        <li className='short-info__item'>
          <h5 className='short-info__label'>Release</h5>
          <div className='short-info__value'>02 2024</div>
        </li>
        <li className='short-info__item'>
          <h5 className='short-info__label'>platform</h5>
          <div className='short-info__value'>PC Client (Windows), Game Streaming, Mobile</div>
        </li>
      </ul>
    </div>
  )
}
