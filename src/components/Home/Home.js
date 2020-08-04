import React from 'react'

import {
  AppBar,
  Container,
  Grid,
  Card
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
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Card
            media={{ type: 'image', url: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA' }}
            title='Title'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
        </Grid>
      </Container>
    </div>
  )
}

export default Home
