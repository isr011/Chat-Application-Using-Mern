import React from 'react'
import useConversation from '../../stateManage/useConversation.js';
import {usesocketContext} from "../../context/socketContext.jsx"



function User({user}) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation ?._id === user._id;
  const { socket, onlineUsers} = usesocketContext()
  const isOnline = onlineUsers.include(user._id);

  
  return (
    <div className={`hover:bg-slate-600 duration-300 ${
      isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
      >
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-400 duration-200 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>{user.name }</h1>
          <span> {user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default User
