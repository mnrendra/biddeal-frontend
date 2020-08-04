import React from 'react'

import './AppBar.css'

const AppBar = ({ title, leftActions, rightActions, fixed }) => {
  return (
    <div className={`AppBar ${fixed ? 'fixed' : ''}`}>
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
