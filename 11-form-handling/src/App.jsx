import React from 'react'

const App = () => {
  
  const formSubmit = (e)=>{
    e.preventDefault();
    //prevents the default behaviour
    //submit hote hi reload hone se rokega
    console.log("submitted")
    
  }
  return (

    <div>
      <form onSubmit={(e)=>{
        formSubmit(e);
        //form by default submit hoke hi reload hota hai!
      }}>
        <input type='text1' placeholder='Enter urname'></input>
        <button>submit</button>
        </form>

    </div>
  )
}

export default App