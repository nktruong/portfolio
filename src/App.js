import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Featured from './pages/Featured'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Hotbar from './components/Hotbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Hotbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
