import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TopBar from './TopBar'
import SearchBar from './ui/SearchBar'

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const updateQuery = (value: string) => {
    setSearchQuery(value)
    console.log(searchQuery)
  }

  const sendRequest = () => {
    console.log(`Your search query is: ${searchQuery}`)
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/api')
      .then(response => console.log(response))
  }, [])

  return (
    <div className="min-h-screen bg-clr-bg-black p-[16px]">
      <TopBar />
      <SearchBar
        updateQuery={(value: string) => updateQuery(value)}
        sendRequest={() => sendRequest()}
      />
    </div>
  )
}

export default Home
