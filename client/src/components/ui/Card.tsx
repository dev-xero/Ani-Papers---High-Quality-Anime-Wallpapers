import React from 'react'

interface CardProps {
	src: string
}

const Card: React.FC<CardProps> = ({ src }) => {
	return (
    <div className="w-[188px] max-w-[188px] h-[270px] max-h-[270px] cursor-pointer border-1 border-red-500">
      <img src={src} alt="wallpaper" className="w-full h-full object-cover inline-block" />
    </div>
  )
}

export default Card