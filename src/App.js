import React, { useEffect } from 'react'

import { useResponsive } from './hooks'

import './App.css'

const App = () => {
  const { orientation, device, size } = useResponsive()

  useEffect(() => {
    console.log('=========')
  }, [])

  useEffect(() => {
    console.log('---------')
  })

  console.log('APP')

  return (
    <div className={`App ${orientation} ${device} ${size}`}>React App</div>
  )
}

export default App
