import React from 'react'
import { loadingIcon } from './index'

interface LoadingScreenProps {
  isLoading: boolean
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div
      className={
        isLoading
          ? 'transition ease ani-papers visible'
          : 'transition ease ani-papers opacity-0 pointer-events-none'
      }
    >
      <div className="loading-screen min-h-screen min-w-full absolute top-0 left-0 bg-clr-bg-black flex items-center justify-center z-[99999]">
        <img
          src={loadingIcon}
          alt="ani papers logo"
          className="max-w-[164px] max-h-[164px] w-[164px] h-[164px] select-none"
        />
      </div>
    </div>
  )
}

export default LoadingScreen
