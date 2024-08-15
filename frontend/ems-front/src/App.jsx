import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Asll from './components/Asll.jsx'



function App() {
 

  return <div>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/login'  element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='Asll' element={<Asll/>} />
    </Routes>
  </div>
}

export default App
