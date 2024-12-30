import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Type from './Type'
import useConversation from '../../stateManage/useConversation.js'
import {useAuth } from "../../context/AuthProvider.jsx"

export default function Right() {
  const  { selectedConversation,setSelectedConversation}= useConversation();
  useEffect(()=>{
    return setSelectedConversation(null)

  },[selectedConversation])
  return (
    <div className=' w-full  bg-slate-950 text-gray-300' >

    
    <div>
      {!selectedConversation ? (<Nochat></Nochat>):(<> 
       

       <Chatuser/>
      <div className=' flex-sahil overflow-y-auto' style={{maxHeight: "calc(88vh - 10vh)"}}>
      <Message/>
      </div>
       <Type/>
     
     </>)}



    </div>


    </div>  
    
  )
}

const Nochat =()=>{
  const[authUser]=useAuth()
  return(
    <>
    <div className=' flex h-screen items-center justify-center'>
      <h1 className=' font-bold text-center'> Welcome
          <span>{authUser.user.name}</span>
        <br></br>
       select a conversation to start a chart </h1>
    </div>
    
    </>



  )}
