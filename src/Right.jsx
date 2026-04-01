import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { X } from 'lucide-react'
import AddCard from './AddCard'
import Card from './Card'

const Right = ({open,setOpen}) => {
  const [card, setCard] = useState([])
  const handleAddCard=(newcard)=>{
    setCard([...card,newcard]);
  }

  return (
    <div className='h-screen w-4/5 p-5'>
      <Navbar />
      <div  className=' h-screen w-full' >
        {
          open && 
          <div className='fixed inset-0 bg-white/30 backdrop-blur-2xl flex justify-center items-center' onClick={()=>{return setOpen(false)}}>
            <AddCard open={open} setOpen={setOpen} onAdd={handleAddCard}/>
          </div>
        }
        <div className='flex flex-wrap m-2'>
          {
          card.map((item,index)=>
            (<Card key={index} data={item}/>)
          )
        }
        </div>

      </div>
    </div>
  )
}

export default Right