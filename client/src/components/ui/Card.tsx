import React from 'react'

interface CardProps {
	src: string
}

const Card: React.FC<CardProps> = ({ src }) => {
	return (
		<div className="w-[200px] h-[200px] cursor-pointer">
			<img src={src} alt="wallpaper" className="w-full h-full bg-cover" />
		</div>
	)
}

export default Card