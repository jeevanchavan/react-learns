import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-bold bg-blue-400 px-9 py-5'>
        <h2 className='text-2xl'>Sheriyans</h2>
        <div className='flex items-center gap-5'>
            <Link className='font-semibold text-lg ' to='/' >Home</Link>
            <Link className='font-semibold text-lg ' to='/about' >About</Link>
            <Link className='font-semibold text-lg ' to='/contact' >Contact</Link>
        </div>
      </div>
  )
}

export default Navbar