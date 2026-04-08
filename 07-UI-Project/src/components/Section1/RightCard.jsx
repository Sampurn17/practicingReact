import React from 'react'

import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full flex-shrink-0 w-80 bg-gray-500 rounded-4xl relative overflow-hidden'>
      <img className='h-full w-full object-cover' src = {props.img}></img>
      <RightCardContent tag={props.tag} id={props.id}/>
      
    </div>
  );
};

export default RightCard;