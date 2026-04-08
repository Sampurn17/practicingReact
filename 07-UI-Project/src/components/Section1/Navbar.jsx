import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-14'>
        <h4 className='bg-black text-white rounded-full px-6 py-2 uppercase text-xs'>Target Audience</h4>
        <button className='bg-gray-100 px-6 py-2 tracking-widest rounded-full text-xs'>Digital Booking Platform</button>
    </div>
  )
}

export default Navbar