import React, { useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import axios from "axios"
import Cookies from "js-cookie"



export default function Logout() {
  const [loading, setLoading]= useState(false)
  
  const handleLogout = async()=>{
     setLoading(true);
    try {
      const response=  await axios.post("/api/user/logout")
      localStorage.removeItem("messenger");
      Cookies.remove("jwt")
      setLoading(false);
      alert("Logout Successfully")

      
    } catch (error) {
      console.error(error);
      
    }

  }
  return (
    <>
      <div className=' w-[4%]  bg-slate-950 text-white flex flex-col justify-end' >
        
        <div className="p-3 align-bottom">
      <form action="">
        <div className="flex space-x-3">
        
          <button>
          <IoMdLogOut  className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"
          onClick={handleLogout}
          />
          </button>
        </div>
      </form>
    </div>



      </div>
    </>
  )
}
