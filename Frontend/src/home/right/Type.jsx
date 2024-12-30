import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.js"

function Type() {
  const { loading, sendMessages} = useSendMessage();
  const [message, setMessage] =useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();
    await sendMessages(message);
    setMessage("");

  }
  return (
    <>
  <form onSubmit={handleSubmit}>
  <div className=' flex space-x-3 h-[8vh] text-center bg-slate-800'>
    <div className='w-[70%] mx-4'>
     <input type="text"
     value={message}
     onChange={(e) => setMessage(e.target.value)}
      placeholder="Type here" 
      className=" border-[1px] border-gray-700 rounded-lg flex items-center w-full py-3 px-3  grow outline-none bg-slate-600  mt-1" />
    
    </div>

    <button className='text-3xl'>
     <IoMdSend className=''/> 

     </button>
    </div>
  </form>
    </>
  )
}

export default Type

//4.52hrs

