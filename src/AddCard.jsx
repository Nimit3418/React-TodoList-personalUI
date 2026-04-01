import React from 'react'
import { X } from 'lucide-react'

const AddCard = ({ open, setOpen, onAdd }) => {

  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [sttime, setSttime] = React.useState('');
  const [endtime, setEndtime] = React.useState('');
return (
  <div onClick={(e) => { e.stopPropagation() }}>
    <div className='h-130 border-2 border-gray-200 rounded-3xl w-120 flex flex-col p-6 justify-between'>
      <div className='flex justify-between'>
        <p className='text-2xl font-medium'>Add New List</p>
        <button onClick={() => { setOpen(false) }} className='rounded-full h-8 w-8 flex justify-center items-center bg-gray-100 hover:bg-gray-300'><X strokeWidth={1.5} /></button>
      </div>
      <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, magni.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title) return;
          onAdd({ title, desc, sttime, endtime });
          setTitle('');
          setDesc('');
          setSttime('');
          setEndtime('');
          setOpen(false);
        }}
        className='flex flex-col gap-5'
      >
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='border-gray-200 border-2 rounded-lg p-3 h-13 w-full' type="text" placeholder='Task name *' />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} className='border-gray-200 border-2 rounded-lg p-3 h-13 w-full' type="text" placeholder='Description' />
        <input value={sttime} onChange={(e) => setSttime(e.target.value)} className='border-gray-200 border-2 rounded-lg p-3 h-13 w-full' type="time" placeholder='Start time' />
        <input value={endtime} onChange={(e) => setEndtime(e.target.value)} className='border-gray-200 border-2 rounded-lg p-3 h-13 w-full' type="time" placeholder='End time' />
        <button type="submit" className='w-full h-8 text-white rounded-lg bg-blue-600 hover:bg-blue-800 p-5 flex justify-center items-center'>
          Add New
        </button>
      </form>
    </div>
  </div>
)
}

export default AddCard