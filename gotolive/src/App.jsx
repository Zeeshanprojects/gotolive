import { lazy, Suspense, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
//Lazy imports (Pages only load whn visited)
const Home=lazy(()=>import("./Pages/Home"))
const Detail=lazy(()=>import("./Pages/Detail"))
const Watchfree=lazy(()=>import("./Pages/Watchfree"))


function App() {
  return (
    <>
    <Router>
        <Header/>
        <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
           <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/details'element={<Detail/>}/>
        <Route path='/watchfree' element={<Watchfree/>}/>
      </Routes>
        </Suspense>
     
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
