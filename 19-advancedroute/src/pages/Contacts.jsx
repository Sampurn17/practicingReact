import React from 'react'
import { Link ,Outlet} from "react-router-dom";

const Contacts = () => {
  return (
    <div className='flex justify-center text-xl font-semibold gap-5 py-4'>
      <Link to='/contacts/men'>Men</Link>
      <Link to='/contacts/women'>Women</Link>
        <Link to='/contacts/kids'>Kids</Link>
        <Outlet/>
    </div>
  )
}

export default Contacts