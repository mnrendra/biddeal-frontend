import React from 'react'
import './icons.css'

export default ({ onClick }) => {
  return (
    <div className='Icon' onClick={onClick}>
      <svg>
        <path fill='none' d='M0 0h24v24H0z' />
        <path fill='inherit' d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
      </svg>
    </div>
  )
}
