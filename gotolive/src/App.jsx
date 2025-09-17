import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
