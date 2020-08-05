import React from 'react'

import Button from '../Button'

import './Card.css'

const Card = ({ media, title, description }) => {
  return (
    <div className='Card'>
      {/* media */}
      {media && media.type === 'image' && (
        <div className='Card-media-image' style={{ backgroundImage: 'url(' + media.url + ')' }}>{}</div>
      )}
      {/* title */}
      <div className='Card-title'>{title}</div>
      {/* description */}
      <div className='Card-description'>{description}</div>
      {/* actions */}
      <div className='Card-actions'>
        <Button label='BUY' flat right />
      </div>
      {/* */}
    </div>
  )
}

export default Card
