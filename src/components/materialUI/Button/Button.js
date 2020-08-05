import React from 'react'

import './Button.css'

const Button = ({ label, flat, right }) => {
  return (
    <button className={`Button ${right && 'right'} ${flat && 'flat'}`}>{label}</button>
  )
}

export default Button
