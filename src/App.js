import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Featured from './pages/Featured'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Hotbar from './components/Hotbar'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Hotbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/featured" component={Featured} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
