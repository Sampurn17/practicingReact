import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar2 = () => {
    let navi = useNavigate();
  return (
    
    <div className='bg-cyan-400 gap-4 py-2 px-4'>
        <button onClick={()=>{
            navi('/')
        }}
        className='bg-amber-600 m-2 font-medium text-white text-xl rounded active:scale-90 cursor-pointer px-2 py-3 '>
            Back to home</button>
            <button
            onClick={()=>{
                navi(-1);
            }}
        className='bg-amber-600 font-semibold m-2 font-medium text-white text-xl rounded active:scale-90 cursor-pointer px-2 py-3 '>
            Previous</button>
            <button onClick={()=>{
                navi(+1);
            }}
        className='bg-amber-600 font-semibold m-2 font-medium text-white text-xl rounded active:scale-90 cursor-pointer px-2 py-3 '>
            Next</button>
    </div>
  )
}

export default Navbar2