import React, { useState } from 'react'
import Menu from './Menu'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const MobileMenuBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const displayedStyling = 'fixed items-center z-[999] left-0 w-[100%] h-[100dvh] ease-in-out duration-500 bg-white'
  const notDisplayedStyling = 'ease-in-out duration-500 fixed left-[-100%]'

  const handleDisplayMenu = () => {
    setDisplayMenu(!displayMenu)
  };

  return (
    <div className='fixed sm:hidden p-4 right-4 align-middle'>
      <div className='block z-[1000]'>
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
