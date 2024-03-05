import React from 'react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
       <Navbar/>
     <h1 className='text-center text-3xl text-red-600'>Explore Menu</h1>
    <Menu/>
    </div>
  )
}

export default page
