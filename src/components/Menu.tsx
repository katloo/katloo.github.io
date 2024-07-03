import React from 'react'

const Menu = ({ menuDisplay, spacing, onClick }) => {
  return (
    <div>
      <ul className={`${ menuDisplay }`}>
        <li className={`hover:text-gray-300 ${ spacing }`}>
            <a href='#about' onClick={onClick}>About</a>
        </li>
        <li className={`hover:text-gray-300 ${ spacing }`}>
            <a href='#talks' onClick={onClick}>Talks</a>
        </li>
        <li className={`hover:text-gray-300 ${ spacing }`}>
            <a href='#contact' onClick={onClick}>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
