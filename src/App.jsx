import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Investment from './pages/Investment'
import Contact from './pages/Contact'
import Thanks from './pages/Thanks'

function App() {
  return (
    <BrowserRouter basename="/Cape-Fear-Collective/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
