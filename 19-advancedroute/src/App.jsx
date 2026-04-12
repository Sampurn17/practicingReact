import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import {Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen '>
      <Navbar/>
      <Navbar2/>
      <Footer/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/contacts' element={<Contacts/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App