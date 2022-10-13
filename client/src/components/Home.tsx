import React from 'react'
import TopBar from './TopBar'
import SearchBar from './ui/SearchBar'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-clr-bg-black p-[16px]">
      <TopBar />
      <SearchBar />
    </div>
  )
}

export default Home
