import React, { useState, useEffect } from 'react'
import { iconLogo, iconLink, iconCreator, iconCreatorHover } from './index'

const TopBar: React.FC = () => {
  const [creatorIcon, setCreatorIcon] = useState(iconCreator)
  const [linkVisibility, setLinkVisibility] = useState(false)

  useEffect(() => {
    if (creatorIcon === iconCreator) {
      setLinkVisibility(false)
    } else {
      setLinkVisibility(true)
    }
  }, [creatorIcon])

  return (
    <div className="flex items-center justify-between mx-auto max-w-[880px] pt-3 pr-[4px] pl-[4px]">
      <a href="/">
        <img
          src={iconLogo}
          alt="ani papers logo"
          className="w-[64px] h-[64px]"
        />
      </a>
      <a
        href="https://github.com/CodeNinja-tech"
        target="_blank"
        rel="noreferrer"
        className="hover:text-white flex"
        onMouseOver={() => setCreatorIcon(iconCreatorHover)}
        onMouseLeave={() => setCreatorIcon(iconCreator)}
      >
        <p
          className={
            linkVisibility
              ? 'font-body mr-5 flex items-center visible transition ease'
              : 'font-body mr-5 hidden items-center transition ease pointer-events-none'
          }
        >
          <img src={iconLink} alt="link" className="mr-1" />
          <span className="text-[14px] md:text-[16px]">The Code Ninja</span>
        </p>
        <img
          src={creatorIcon}
          alt="ani papers creator"
          className="w-[24px] h-[28.88px]"
        />
      </a>
    </div>
  )
}

export default TopBar
