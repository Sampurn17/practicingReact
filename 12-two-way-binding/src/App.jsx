import React,{useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  
  const formSubmit = (e)=>{
    e.preventDefault();
    //prevents the default behaviour
    //submit hote hi reload hone se rokega
    console.log("fomr submitted by",title);
    setTitle('');
    
  }
  return (

    <div>
      <form onSubmit={(e)=>{
        formSubmit(e);
        //form by default submit hoke hi reload hota hai!
      }}>
        <input type='text1'
         placeholder='Enter urname'
         value={title}
        onChange={(e)=>{
        setTitle(e.target.value);
        
        }}></input>

        <button>submit</button>
        </form>
        

    </div>
  )
}

export default App