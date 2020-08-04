import React from 'react'

import {
  AppBar,
  Container,
  Grid
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
        fixed
      />
      <Container paddingTop='withAppBar'>
        <Grid
          colSize='large'
        >
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>1</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>2</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>3</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>4</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>5</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>6</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>7</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>8</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>9</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>10</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>11</div>
          </div>
          <div style={{ height: '100px', padding: '8px' }}>
            <div style={{ width: '100%', height: '100%', background: '#EEEEEE' }}>12</div>
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Home
