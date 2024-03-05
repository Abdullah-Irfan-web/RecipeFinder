
import Image from 'next/image'
import React from 'react'
import mypic from '../components/16906_294312_10150_image.jpg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
      <Image src={mypic} width={110} height={110}/>
       
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link className="mr-5 hover:text-red-600" href="/trending">Trending Recipes</Link>
        <Link className="mr-5 hover:text-red-600" href="" >Chef Special</Link>
        <Link className="mr-5 hover:text-red-600" href="/menu" >Menu List</Link>
        <Link className="mr-5 hover:text-red-600" href="">Comfort food</Link>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none text-red-600 rounded text-base mt-4 md:mt-0">Sign In
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Navbar
