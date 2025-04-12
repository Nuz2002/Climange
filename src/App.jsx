import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Shop from './Components/Shop'
import FAQ from './Components/FAQ'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App