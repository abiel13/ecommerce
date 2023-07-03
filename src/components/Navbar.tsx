import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className='w-full p-3 px-3 flex justify-between items-center'>
        <div className='text-4xl font-bold text-blue-500 '><span className='text-white'>A</span>sale</div>
        <div className='flex items-center gap-5'>
            <button className='px-7 py-2 bg-white rounded-lg font-bold text-blue-500 transition hover:opacity-75' >login</button>
            <button className='px-7 py-2 bg-blue-500 rounded-lg font-bold text-white transition hover:opacity-75' >signUp</button>
        </div>
    </div>
  )
}

export default Navbar