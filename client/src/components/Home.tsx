import React, { useState } from 'react'
import axios from 'axios'
import TopBar from './TopBar'
import SearchBar from './ui/SearchBar'
import Card from './ui/Card'

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any[] | null>([])
  const [searchTerm, setSearchTerm] = useState('')

  const updateQuery = (value: string): void => {
    setSearchQuery(value)
  }

  const sendRequest = (): void => {
    console.log(`Your search query is: ${searchQuery}`)
    setLoading(true)
    if (searchQuery !== '') {
      let data = null
      axios
        .get(`http://localhost:8080/api?query=${searchQuery}`)
        .then(response => {
          data = response.data
          console.log(data)
          setLoading(false)
          setSearchTerm(searchQuery)
          setResults(data)
        })
        .catch(err => console.log(err))
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
          <h2 className="font-body text-2xl mt-[20px] mb-[20px]">
            Results for {searchTerm}
          </h2>
          <div className="grid grid-cols-4 gap-[12px]">
            {results &&
              results.map(({ arturl, art_id }) => (
                <Card src={arturl} key={art_id} />
              ))}
          </div>
        </div>
      ) : (
        <div className="grid place-items-center mt-[64px]">Loading</div>
      )}
    </div>
  )
}

export default Home
