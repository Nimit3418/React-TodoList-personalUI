import React from 'react'
import { useState } from 'react';
import{Delete} from 'lucide-react'

const Card = ({ data , onDelete}) => {
  const [check, setCheck] = useState(false)
  function ischecked(e){
    setCheck(e.target.checked);
  }
  return (
    <div>
      <div className='m-4 border-2 border-gray-200 bg-gray-50 min-h-40 w-80 rounded-3xl p-3 pl-6 pr-6 flex flex-col gap-3'>
        <div className='flex items-center gap-3 justify-between'>
          <div className='flex items-center gap-3'>
            <input onChange={ischecked} type="checkbox" className='accent-blue-600 h-4 w-4' id='Name'></input>
            <h1 className={`${check ? 'line-through text-black':'text-black'} font-bold text-[17px] tracking-wider`}>{data.title}</h1>
          </div>
          <h1 className='font-bold text-[24px] tracking-wider ml-14'>...</h1>
        </div>
        <p className='text-sm text-gray-500'>{data.desc}</p>
        <div className='flex items-center justify-between'>
          <h1 className='text-[15px] '> {data.sttime} - {data.endtime} </h1>
        <button onClick={onDelete} className='rounded-full h-6 w-6 flex items-center justify-center bg-red-400'><Delete size={16} strokeWidth={2.25} /></button>
        </div>
      </div>
    </div>
  )
}

export default Card