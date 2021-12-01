import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="flex justify-around max-w-7xl m-auto py-20">
      <div className="w-1/2 text-left">
        <h1 className="lg:text-6xl md:text-3xl sm:text-xl text-3xl text-gray-50 font-bold mb-14">Welcome to my site, my name is Nathan.</h1>
        <Link className="py-3 px-4 bg-purple-600 rounded-xl shadow-md text-xl text-gray-50 font-semibold hover:bg-purple-700 transition duration-150 ease-in transform hover:-translate-y-0.5 flex items-center w-max" to="/featured">
          Check out my latest project, Cookdeck

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg>
        </Link>
      </div>
      <div className="w-1/2">
        <img src="https://media.discordapp.net/attachments/763423276671434812/915047670530310144/2021-11-29_20.12.32.png?width=2160&height=1162" alt="Minecraft screenshot of green hills and white horses"/>
      </div>
    </div>

  )
}

export default Hero

