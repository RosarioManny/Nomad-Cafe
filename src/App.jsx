import './App.css'
// import { theme } from './styles/themes.js'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/partials/_footer.jsx'
import Navbar from './components/partials/_navbar.jsx'
import Home from './components/Home/index.jsx'
import Menu from './components/Menu/menu.jsx'
import About from './components/About/about.jsx'
import Faq from './components/Faq/faq.jsx'


function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/faq" element={<Faq/>}/>
          {/* <Route path="/menu/breakfast" element={<MenuBreakfast/>}/>
          <Route path="/menu/beverages" element={<MenuBeverages/>}/>
          <Route path="/menu/sweets" element={<MenuSweets/>}/> */}
        </Routes>
      <Footer />
    </>
  )
}

export default App
