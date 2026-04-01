import React from 'react'
import { CircleUserRound } from 'lucide-react';
const Left = ({setOpen}) => {
  return (
    <div className='h-screen w-1/5 bg-gray-50 p-6 gap-y-8 flex flex-col justify-between'>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-row gap-3 pt-4'>
          <img className='h-10 ' src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" alt="" />
          <h1 className='text-4xl font-bold text-blue-800'>Tascade</h1>
        </div>
        <button onClick={()=>{return setOpen(true)}} className='bg-blue-600 rounded-[xs] text-white p-2 rounded-[10px]'>+ Add New List</button>
      </div>
      <a href="" className='flex gap-2 text-2xl items-center pl-5'><CircleUserRound size={20}/> Contact us</a>
    </div>
  )
}

export default Left