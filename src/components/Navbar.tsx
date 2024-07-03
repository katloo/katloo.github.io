import React from 'react'
import DesktopMenuBar from './DesktopMenuBar'
import MobileMenuBar from './MobileMenuBar'

const Navbar = () => {

    return (
        <nav className='container sticky top-0 flex h-16 max-w-[1240px] mx-auto px-4'>
            <h1 className='title w-full'>
                <a href='#'>hello.</a></h1>
            <DesktopMenuBar />
            <MobileMenuBar />
        </nav>
    )
}

export default Navbar
