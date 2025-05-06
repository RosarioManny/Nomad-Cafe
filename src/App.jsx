import './App.css'
// import { theme } from './styles/themes.js'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/partials/_footer.jsx'
import Navbar from './components/partials/_navbar.jsx'
import Home from './components/index.jsx'
import Menu from './components/menu.jsx'
import About from './components/about.jsx'
import Faq from './components/faq.jsx'
import { ResponsiveProvider } from './utils/responsoveProvider.jsx'


function App() {

  return (
    <ResponsiveProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/menu/breakfast" element={<Home/>}/>
          <Route path="/menu/beverages" element={<Home/>}/>
          <Route path="/menu/sweets" element={<Home/>}/>
        </Routes>
      <Footer />
    </ResponsiveProvider>
  )
}

export default App
