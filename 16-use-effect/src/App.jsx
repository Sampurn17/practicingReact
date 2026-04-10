import React,{useState} from 'react'
import { useEffect } from 'react'

const App = () => {
  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

  function aChanging(){
    console.log('changing value of a')
  }

  function bChanging(){
    console.log('changing value to b')
  }

  useEffect(function(){
    aChanging()
  },[A])
  useEffect(function(){
    bChanging()
  },[B])
  /*component mounted only once as dependency passes, [] means dependent on all, [num] depends on num only, active hua tbhi chalega*/

  return (

    <div>
      <h1>value A is {A}</h1>
      <h1>value B is {B}</h1>
      <button onClick={()=>{
        setA(A+1)
      }}>CLICK+</button>
      <button onClick={()=>{
        setB(B-1)
      }}>CLICK+</button>
    </div>
  )
}

export default App