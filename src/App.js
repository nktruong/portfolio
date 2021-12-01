import './App.css'
import Home from './Home'
import About from './About'
import Featured from './Featured'
import Portfolio from './Portfolio'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl text-indigo-600">Hello TailwindCSS</h1>

      <Home />
      <About />
      <Featured />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
