import React,{useState} from 'react'
const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, settask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault();
    const copyTask = [...task]
    copyTask.push({title,detail})
    settask(copyTask)
    console.log(copyTask)
    setTitle('')
    setDetail('')

    
    
  }
  const deleteNote = (idx)=>{
      const copyTask =[...task];
      copyTask.splice(idx,1)
      settask(copyTask)
    }

  
  return (
    <div className='bg-black lg:flex  gap-4 items-start h-screen text-white '>
      
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex items-start lg:w-1/2 flex-col gap-4 p-10'>
        <h1 className='text-4xl font-bold'>Add notes</h1>
        {/*PEHLA INPUT HEADING*/}
        <input type="text" placeholder='enter note head' className='px-5 w-full py-2 rounded-md border-3 outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)

        }}></input>

        {/*PEHLA INPUT DESCRIPTION*/}
        <textarea type="text" placeholder='enter note ' className='px-5 outline-none w-full py-2 h-32 rounded-md border-3'
        value = {detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}></textarea>

        {/*submit*/}
        <button className='bg-white w-full active:bg-black text-black px-5 py-2 rounded -md'>Post Note</button>
        
      </form>
      <div className='lg:w-1/2 lg:borl-l-2 gap-5 h-full bg-gray-900 p-10 flex flex-col'>
      <h1 className='text-3xl font-bold'>your notes</h1>
      <div className='flex flex-wrap gap-4 mt-5 overflow-auto'>
        {task.map(function(elem,idx){
          return <div key  ={idx} style={{ backgroundImage: `url(https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3JtNTI2LWJnLTAzYl8xLnBuZw.png)` }}className='flex-col justify-between flex relative text-black bg-cover p-4 h-52 w-52 rounded-2xl bg-transparent'>
            
            <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
            <p className='text-gray-400'> {elem.detail}</p>
            <button className='w-full py-1 cursor-pointer active:scale-95 text-xs rounded-xl font-bold bg-red-600 text-white' onClick={()=>{
              deleteNote(idx)
            }}>Delete</button>
          </div>
        })}
        

        
        
        </div>
        
      </div>
    </div>
  )
}

export default App