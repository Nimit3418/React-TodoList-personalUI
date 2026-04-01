import React from 'react'
import {BellDot} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full h-25 flex flex-row justify-between pl-7 pr-7 items-center'>
      <h1 className='text-4xl font-bold text-gray-600'>Todo List</h1>
      <div className='flex flex-row items-center gap-5'>
        <BellDot color="#475563" size={30}/>
        <img className='h-12 rounded-full' src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
    </div>
  )
}

export default Navbar