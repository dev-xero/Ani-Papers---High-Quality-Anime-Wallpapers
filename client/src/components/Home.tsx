import React, { useState } from 'react'
import TopBar from './TopBar'
import SearchBar from './ui/SearchBar'

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const updateQuery = (value: string) => {
    setSearchQuery(value)
    console.log(searchQuery)
  }
  return (
    <div className="min-h-screen bg-clr-bg-black p-[16px]">
      <TopBar />
      <SearchBar updateQuery={(value: string) => updateQuery(value)} />
    </div>
  )
}

export default Home
