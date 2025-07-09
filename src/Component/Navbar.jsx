'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar({  setQuery, setMovietype }) {
  
  const [showDropdown, setShowDropdown] = useState(false);





  
  return (
    <header className="bg-white/10   shadow sm:sticky top-0 z-50">
      <nav className=" mx-auto container " aria-label="Top">
        <div className="flex flex-col  sm:flex-row gap-2 sm:gap-0 my-2 sm:my-0 sm:py-2 items-center justify-between  ">
          {/* Logo */}
          <div className="flex items-center  ">
            <a href="#" className='flex '>
              <h2 className='  text-md md:text-xl lg:text-2xl mx-1 lg:mx-2'>MOVIE MAZE</h2>
              <img className="h-6 md:h-7 lg:h-8 w-auto" src="https://img.icons8.com/?size=100&id=111158&format=png&color=000000" alt="Logo" />
            </a>
          </div>






          {/* Search Bar */}
          <div className=" md:ml-20 md:flex-1    ">
            <div className="relative md:w-4/5  ">
              <form action="" className="relative  ">
                <input
                  type="text"
                  placeholder="Search movies..."
                  onChange={(e) => {
                    setQuery(e.target.value)
                  }
                  }

                  className="block  rounded-md w-full focus:bg-white/50  border-gray-300 pl-10 pr-3 py-2 text-lg placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </form>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/*nav*/}
          <div className="  md:items-center mr-10 gap-2 text-md lg:text-lg font-medium text-gray-600 relative">
            <div className="relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="hover:text-black flex items-center gap-1"
              >
                Categories
                <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute bg-gray-700 text-black mt-2 w-40 rounded-md shadow-lg border z-50">
                  <p className="block px-4 py-2 hover:bg-gray-100" onClick={() => {
                    setMovietype('movie');
                    setShowDropdown(false)
                    console.log('clicked')
                  }}>Movies</p>
                  <p className="block px-4 py-2 hover:bg-gray-100" onClick={() => { setMovietype('series'); setShowDropdown(false) }}>Series</p>
                  <p className="block px-4 py-2 hover:bg-gray-100" onClick={() => { setMovietype('episode'); setShowDropdown(false) }}>Episodes</p>
                </div>
              )}
            </div>
          </div>
          </div>
          


      </nav>
    </header>
  )
}
