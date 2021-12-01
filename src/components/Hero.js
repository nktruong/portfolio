import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-gray-50 font-black mb-14">woah</h1>
      <Link className="py-3 px-10 bg-purple-600 rounded-2xl shadow-md text-3xl text-gray-50 font-semibold hover:bg-purple-700 transition duration-150 ease-in transform hover:-translate-y-0.5 flex items-center" to="/featured">
        Check out my latest project, Cookdeck

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      </Link>
    </div>

  )
}

export default Hero

