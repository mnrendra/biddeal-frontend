import React from 'react'

import './AppBar.css'

const AppBar = ({ title, leftActions, rightActions }) => {
  return (
    <div className='AppBar'>
      {/* left actions */}
      {leftActions.length && (
        <div className='AppBar-leftActions'>
          {leftActions.map((action) => action)}
        </div>
      )}
      {/* title */}
      {title && (
        <div className='AppBar-title'>{title}</div>
      )}
      {/* right actions */}
      {rightActions.length && (
        <div className='AppBar-rightActions'>
          {rightActions.map((action) => action)}
        </div>
      )}
      {/* */}
    </div>
  )
}

export default AppBar
