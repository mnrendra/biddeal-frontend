import React from 'react'

import { useResponsive } from './hooks'

import Home from './components/Home'

import './App.css'

const App = () => {
  const { orientation, device, size } = useResponsive()

  return (
    <div className={`App ${orientation} ${device} ${size}`}>
      <Home />
    </div>
  )
}

export default App
