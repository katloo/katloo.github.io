import React from 'react'

const Hero = () => {
  return (
    <section id='hero'>
        <div className="bg-hero-image bg-no-repeat flex items-center justify-center text-center max-w-[1240px] h-[calc(100vh-64px)] bg-center mx-auto">
            <div className='text-white drop-shadow-md font-serif p-4 z-50'>
                <p className='text-5xl'>Hi &#128075;</p>
                <p className='text-3xl'>Thanks for wandering here</p>
            </div>
        </div>
    </section>
    
  )
}

export default Hero
