import React from 'react'

const App = () => {

  const user={
    name: 'sampurn',
    age: 20,
    city: 'Ghaziabad'
  }
  localStorage.setItem('user',JSON.stringify(user))
  
  return (
    <div>App</div>
  )
}

export default App