import axios from 'axios'
const App = () => {
      const getData=async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json();
        console.log(data)
    }

  return (


    <div>
      <button onClick={getData}>
        GET DATA
      </button>
    </div>
  )
}

export default App