import React from 'react'

import './Grid.css'

const Grid = ({ children, colSize }) => {
  const _colSize = colSize ? ' colSize-' + colSize : ''

  return (
    <div className={'Grid' + _colSize}>
      {children.map((Child, index) => <div className='Grid-col' key={index}>{Child}</div>)}
    </div>
  )
}

export default Grid
