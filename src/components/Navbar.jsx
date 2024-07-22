import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between z-50 absolute w-full p-3'>
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
    <div>
    <button className="text-white pr-4">Sign In</button>
    <button className="bg-red-600 px-4 py-2 rounded">Sign Up</button>
    </div>
    </div>
  )
}

export default Navbar
