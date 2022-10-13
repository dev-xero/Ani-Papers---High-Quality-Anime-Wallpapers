import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'

const App: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <div className='App text-white'>
      <LoadingScreen isLoading={isLoading} />
      <Home />
    </div>
  )
}

export default App
