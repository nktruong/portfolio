import React from 'react'
import { Link } from 'react-router-dom'

function Hotbar(){
  return(
    <nav className="flex justify-around w-full text-4xl font-semibold text-indigo-300 fixed bottom-12" role="navigation">
      <div className="div px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="hidden md:flex space-x-[1rem]">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 p-4 border-8 border-gray-400 hover:border-gray-300 transform hover:scale-105 text-green-500 dark:text-purple-400 bg-gray-700 bg-opacity-60 shadow-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        <Link to="/about">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 p-4 border-8 border-gray-400 hover:border-gray-300 transform hover:scale-105 text-cyan-400 bg-gray-700 bg-opacity-60 shadow-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>
        <Link to="/featured">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 p-4 border-8 border-gray-400 hover:border-gray-300 transform hover:scale-105 text-yellow-400 bg-gray-700 bg-opacity-60 shadow-inner" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg>
        </Link>
        <Link to="/portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 p-4 border-8 border-gray-400 hover:border-gray-300 transform hover:scale-105 text-red-500 bg-gray-700 bg-opacity-60 shadow-inner" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </Link>
        <Link to="/contact">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 p-4 border-8 border-gray-400 hover:border-gray-300 transform hover:scale-105 text-blue-600 bg-gray-700 bg-opacity-60 shadow-inner" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Hotbar;