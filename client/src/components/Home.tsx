import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TopBar from './TopBar'
import SearchBar from './ui/SearchBar'
import Card from './ui/Card'

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any[] | null>([])

  useEffect(() => {
    results?.map(item => console.log(item.url))
  }, [results])

  const updateQuery = (value: string): void => {
    setSearchQuery(value)
  }

  const sendRequest = async (): Promise<void> => {
    console.log(`Your search query is: ${searchQuery}`)
    if (searchQuery !== '') {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api?query=${searchQuery}`
        )
        setLoading(false)
        setResults(data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="min-h-screen bg-clr-bg-black p-[16px]">
      <TopBar />
      <SearchBar
        updateQuery={(value: string) => updateQuery(value)}
        sendRequest={() => sendRequest()}
      />
      {!loading ? (
        <div className="mx-auto max-w-[880px] pt-3 pr-[4px] pl-[4px]">
          <h2 className="font-body text-2xl mt-[20px] mb-[20px]">Search Results for {searchQuery}</h2>
          <div className="grid grid-cols-4 gap-[12px]">
            {results && results.map(({ path }) => <Card src={path} />)}
          </div>
        </div>
      ) : (
        <div className="grid place-items-center mt-[64px]">Loading</div>
      )}
    </div>
  )
}

export default Home
