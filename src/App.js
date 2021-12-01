import './App.css'
import Home from './Home'
import About from './components/About'
import Featured from './Featured'
import Portfolio from './Portfolio'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Hotbar from './hotbar'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-indigo-600">Hello TailwindCSS</h1>
        <Hotbar />
        {/* <Router to="/" component="{Home}"/> */}
        <Router>
          <nav>
            <Link to="/" component={Home}>Home</Link>
            <Link to="/About" component={About}>About</Link>
            <Link to="/featured" component={Featured}>Featured</Link>
            <Link to="/portfolio" component={Portfolio}>Portfolio</Link>
            <Link to="/contact" component={Contact}>Contact</Link>
          </nav>
        </Router>
    </div>
  )
}

export default App
