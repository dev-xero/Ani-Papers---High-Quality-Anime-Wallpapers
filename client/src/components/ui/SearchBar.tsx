import React, { useState } from 'react'
import { iconSearch, iconSearchHover } from '../index'

const SearchBar: React.FC = () => {
	const [searchIcon, setSearchIcon] = useState(iconSearch)

  return (
    <div className="mt-[24px] mx-auto max-w-[880px] pr-[4px] pl-[4px] group relative">
      <img
        src={searchIcon}
        alt="icon-search"
        className="top-[50%] translate-y-[-50%] left-[24px] absolute inline-block"
      />
      <input
        type="text"
        placeholder="Find your wallpapers"
				className="w-full block bg-light-black outline-none border-[1px] border-light-black px-[16px] py-[14px] pl-[44px] font-body focus:border-accent transition-[border] ease"
				onFocus={() => setSearchIcon(iconSearchHover)}
				onBlur={() => setSearchIcon(iconSearch)}
      />
    </div>
  )
}

export default SearchBar
