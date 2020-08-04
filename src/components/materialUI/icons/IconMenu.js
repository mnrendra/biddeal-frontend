import React from 'react'
import './icons.css'

export default ({ onClick }) => {
  return (
    <div className='Icon' onClick={onClick}>
      <svg>
        <path fill='none' d='M0 0h24v24H0z' />
        <path fill='inherit' d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
      </svg>
    </div>
  )
}
