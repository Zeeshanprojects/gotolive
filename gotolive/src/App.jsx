import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Detail from './Pages/Detail'


function App() {
  return (
    <>
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/details'element={<Detail/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
