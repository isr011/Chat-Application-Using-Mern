import React from 'react'
import { IoMdSend } from "react-icons/io";

function Type() {
  return (
    <>
    <div className=' flex space-x-3 h-[8vh] text-center'>
    <div className='w-[70%] mx-4'>
     <input type="text"
      placeholder="Type here" 
      className=" border-[1px] border-gray-700 rounded-lg flex items-center w-full py-3 px-3  grow outline-none bg-slate-600  mt-1" />
    
    </div>

    <button className='text-3xl'>
     <IoMdSend className=''/> 

     </button>
    </div>
    </>
  )
}

export default Type

