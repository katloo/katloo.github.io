import React, { useRef } from 'react'

const SliderItem = ({
    index,
    metadata
}: {
    index: number,
    metadata?: any,
}) => {
  return (
    <div className='p-2 justify-center align-center'>
        <div className='aspect-video'>
            {
                metadata.type === 'video' && 
                    <iframe key={index} 
                        src={metadata.src} 
                        className='w-full aspect-video'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe> ||
                metadata.type === 'article' && 
                    <a 
                        href={metadata.src} 
                        className='h-full w-full block bg-cover bg-center'
                        style={{ backgroundImage: `url(${metadata.thumbnail})` }}
                        target='_blank'
                        rel='noopener noreferrer'>
                    </a>
            }
        </div>
        <div className='title text-xs justify-center align-center'>{metadata.title}</div>
    </div>
  )
}

export default SliderItem
