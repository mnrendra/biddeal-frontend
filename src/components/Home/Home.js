import React from 'react'

import {
  AppBar
} from '../materialUI'

import {
  IconMenu,
  IconMoreVert
} from '../materialUI/icons'

import './Home.css'

const Home = () => {
  const handleMenu = () => {
    console.log('menu')
  }

  const handleMoreVert = () => {
    console.log('more vert')
  }

  const leftActions = [
    <IconMenu key='menu' onClick={handleMenu} />
  ]

  const rightActions = [
    <IconMoreVert key='menu' onClick={handleMoreVert} />
  ]

  return (
    <div className='Home'>
      <AppBar
        leftActions={leftActions}
        title='Title'
        rightActions={rightActions}
      />
    </div>
  )
}

export default Home
