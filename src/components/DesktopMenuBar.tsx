import React from 'react'
import Menu from './Menu'

const DesktopMenuBar = () => {
  return (
    <div className='hidden sm:flex justify-between items-center'>
        <Menu menuDisplay='flex' spacing='p-4' onClick={() => {}}/>
    </div>
  )
}

export default DesktopMenuBar
