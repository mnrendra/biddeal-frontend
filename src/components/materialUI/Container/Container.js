import React from 'react'

import './Container.css'

const Container = ({ children, paddingTop }) => {
  return (
    <div className={`Container ${paddingTop || ''}`}>
      {children}
    </div>
  )
}

export default Container
