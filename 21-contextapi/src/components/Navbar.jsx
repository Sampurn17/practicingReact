import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {
    const [theme]= useContext(ThemeDataContext)
    
    
  return (
    
    <div className={theme}>
        
        <h2>ContextAPI</h2>
    
        <Navbar2/>
    </div>
  )
}

export default Navbar