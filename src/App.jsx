import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/partials/_footer.jsx'
import Navbar from './components/partials/_navbar.jsx'
import  Home  from '../src/components/Home/index.jsx'
import  Faq from '../src/components/Faq/faq.jsx'
import  About  from '../src/components/About/about.jsx'
import  Menu  from '../src/components/Menu/menu.jsx'



function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
