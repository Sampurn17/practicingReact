import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
     <h2 >MY WEBPAGE</h2>
      <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/news'>News</Link>

      </div>

    </div>
  )
}

export default Navbar