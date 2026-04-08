import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    
    <div id = 'right' className='p-6 h-[75vh] overflow-auto flex gap-5 flex-nowrap rounded-4xl w-8/12'>
      {props.users.map(function(elem,idx){
        return <RightCard key = {idx} id={idx} img={elem.img} tag={elem.tag} />
      })}

    </div>
  )

}

export default RightContent