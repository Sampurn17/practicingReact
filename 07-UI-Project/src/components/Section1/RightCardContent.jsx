import React from 'react'
import {MoveRight} from 'lucide-react';
const RightCardContent = (props) => {
  return (
    <div className='top-0 bottom-0 h-full w-full absolute p-10 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full font-bold text-xl h-12 w-12 items-center justify-center flex'>{props.id+1}</h2>
<div className='flex flex-col gap-6'>
          <div  className='text-lg text-white mb-14 leading-normal'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex veniam facilis error, porro excepturi optio.
          </div>
          <div className='bg-blue-400 text-white font-semibold rounded-full flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-blue-500 transition-colors'>
            <button>{props.tag}</button>
            <button><MoveRight /></button>
          </div>
        </div>
      </div>)
}

export default RightCardContent