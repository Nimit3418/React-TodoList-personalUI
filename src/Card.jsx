import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <div className='border-2 border-gray-200 bg-gray-50 h-40 w-90 rounded-3xl p-4 flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <input type="checkbox" className='accent-blue-600 h-4 w-4' id='Name'></input>
          <h1 className='font-bold text-[17px] tracking-wider'>{data.title}</h1>
          <h1 className='font-bold text-[24px] tracking-wider ml-14'>...</h1>
        </div>
        <p className='text-sm text-gray-500'>{data.desc}</p>
        <h1 className='text-[15px] '> {data.sttime} - {data.endtime} </h1>
      </div>
    </div>
  )
}

export default Card