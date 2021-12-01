import React from 'react'
import { Link } from 'react-router-dom'

function Hotbar(){
  return(
    <nav className="flex justify-around items-center h-16 text-4xl font-semibold text-indigo-600 relative" role="navigation">
      <div className="div px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 hidden md:block">
        <Link className="p-4" to="/">Home</Link>
        <Link className="p-4" to="/about">About</Link>
        <Link className="p-4" to="/featured">Featured</Link>
        <Link className="p-4" to="/portfolio">Portfolio</Link>
        <Link className="p-4" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Hotbar;