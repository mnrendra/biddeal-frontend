import React from 'react'

import './Grid.css'

const Grid = ({ children, colSize }) => {
  const _colSize = colSize ? ' colSize-' + colSize : ''

  return (
    <div className={'Grid' + _colSize}>
      {children}
    </div>
  )
}

export default Grid
