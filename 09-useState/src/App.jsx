import React,{ useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  function increase(){
    setNum(num+1);
  }
  function decrease(){
    setNum(num-1);
  }
  function jumpByFive(){
    setNum(num+5);
  }
  return (
    <div>
      <h1>{num}</h1>
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jumpByFive}>JUMP5</button>
    </div>
  )
}

export default App
