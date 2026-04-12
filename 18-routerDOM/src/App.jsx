import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />}/>
      </Routes>

    </div>
  )
}

export default App