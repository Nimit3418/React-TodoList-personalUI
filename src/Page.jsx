import React from 'react'
import Left from './Left'
import Right from './Right'
import {useState} from 'react'

const Page = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className='h-screen w-full  flex'>
        <Left setOpen={setOpen}/>
        <Right open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Page