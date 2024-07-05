import React, { useState } from 'react'
import Menu from './Menu'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MobileMenuBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const displayedStyling = 'absolute items-center z-[999] top-0 left-0 w-[100%] h-[100%] ease-in-out duration-500 bg-white'
  const notDisplayedStyling = 'ease-in-out duration-500 fixed left-[-100%]'

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu)
  };

  return (
    <div className='block p-4 sm:hidden'>
      <div className='absolute block z-[1000]'>
        <button onClick={handleDisplayMenu}>
          { displayMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </button>
      </div>
      <Menu 
        menuDisplay={ displayMenu ? displayedStyling : notDisplayedStyling } 
        spacing='p-4 border-b border-gray-600'
        onClick={() => setDisplayMenu(false)}/>
    </div>
  )
    
}

export default MobileMenuBar
