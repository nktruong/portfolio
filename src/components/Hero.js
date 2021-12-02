import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="flex justify-around max-w-7xl m-auto py-40">
      <div className="w-1/2 text-left pr-6">
        <h1 className="lg:text-5xl md:text-3xl sm:text-xl text-2xl text-green-900 dark:text-transparent bg-clip-text caret-pink-600 bg-gradient-to-br dark:from-purple-500 dark:via-purple-400 dark:to-fuchsia-100 font-bold mb-12">Welcome to my site! 
        <span class="block">I'm Nathan.</span></h1>
        <p className="lg:text-2xl font-medium text-green-800 dark:text-indigo-200 tracking-tight">It's nice to meet you! Though we just met. You can roam through this site to see who I am, what I do, what projects I've done, or you can check out my socials.</p>

        <div className="px-8 py-10 mt-2">
          <div className="grid gap-10 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-yellow-300 dark:from-pink-600 dark:to-purple-600 rounded-lg filter blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button>
              <Link className="relative py-3 px-4 bg-gray-800 rounded-xl shadow-md text-xl text-gray-50 font-semibold transition duration-150 ease-in flex items-center space-x-5 w-full" to="/featured">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 text-fuchsia-500 -rotate-3 transform" fill="" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                <span>
                Check out my latest project, <span className="text-yellow-300 dark:text-cyan-400 group-hover:text-gray-100 transition duration-200"> Cookdeck
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline transform group-hover:translate-x-1.5 duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </span>
                </span>

              </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Link to="/bityard">
          <img className="transform -rotate-3 rounded-lg shadow-inner scale-90 hover:scale-95 transition ease-in duration-150 cursor-pointer" src="https://media.discordapp.net/attachments/763423276671434812/915047670530310144/2021-11-29_20.12.32.png?width=2160&height=1162" alt="Minecraft screenshot of green hills and white horses"/>
        </Link>
      </div>
    </div>

  )
}

export default Hero

