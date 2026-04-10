import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=35`);
    setuserData(response.data);
    console.log(response.data)


    
    
  }
  useEffect(function(){
    getData();

  },[index])
  let printUserData = <h3 className='text-gray-200 text-xs absolute top-1/2 left-1/2 -translate-x-1/2'>Loading</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return<div ker={idx}>
        <a href={elem.url}>
                <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img className='h-full w-full object-cover 'src = {elem.download_url} alt=""></img>
        
      </div>
        </a>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black p-4 h-screen overflow-auto text-white'>

      <div className='flex flex-wrap gap-5'>{printUserData}
        
      </div>
      <div className='flex justify-center items-center gap-4 mt-5 p-3'>
        <button className='rounded-md text-black bg-amber-400 px-4 py-2 cursor-pointer active:scale-95'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setuserData([]);
          }
        }}>prev</button>
        <h4 className='text-white'>page {index}</h4>
        <button className=' rounded-md text-black bg-amber-400 px-4 py-2 cursor-pointer active:scale-95'
        onClick={()=>{
          setIndex(index+1);
          setuserData([]);
        }}>NEXT</button>
        
      </div>
    </div>
  )
}

export default App