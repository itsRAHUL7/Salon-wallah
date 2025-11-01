import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Login from "./Components/Auth/Login"

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/LandingPage/Home'
function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
