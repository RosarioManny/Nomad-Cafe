import { useState } from 'react'
import './App.css'
import { theme } from './styles/themes.js'
import { Routes, Route } from 'react-router-dom'
import Home from './components/index.jsx'
import Navbar from './components/partials/_navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
