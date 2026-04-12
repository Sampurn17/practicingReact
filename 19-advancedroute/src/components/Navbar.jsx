import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='bg-blue-800 py-4 px-8 flex justify-between' >
        <h2 className='font-bold text-xl'>Our Website</h2>
        <div className='gap-8 flex'>
          <Link className='text-lg font-medium' to='/'>Home</Link>
          <Link className='text-lg font-medium' to='/about'>About</Link>
          <Link className='text-lg font-medium' to='/course'>Course</Link>
          <Link className='text-lg font-medium' to='/contacts'>Contacts</Link>
        </div>
    </div>
  )
}

export default Navbar