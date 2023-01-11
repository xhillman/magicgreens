import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Systems from './components/Systems'
import Products from './components/Products'
import Cart from './components/Cart'

import './app.css'

function App() {

  return (
    <Routes>
      {/* <Cart /> */}
      <Route path="/" element={<Home />} />
      <Route path="/thestory" element={<About />}/>
      <Route path="/thesystems" element={<Systems />} />
      <Route path="/thegoods" element={<Products />} />
    </Routes>
  )
}

export default App
