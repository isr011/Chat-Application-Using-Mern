import React from 'react'
import { IoMdLogOut } from "react-icons/io";


export default function Logout() {
  return (
    <>
      <div className=' w-[4%]  bg-slate-950 text-white flex flex-col justify-end' >
        
        <div className="p-3 align-bottom">
      <form action="">
        <div className="flex space-x-3">
        
          <button>
          <IoMdLogOut  className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
          </button>
        </div>
      </form>
    </div>



      </div>
    </>
  )
}
