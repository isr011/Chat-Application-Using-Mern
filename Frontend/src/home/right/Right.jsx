import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Type from './Type'

export default function Right() {
  return (
    <>
      <div className=' w-[70%]  bg-slate-950 text-white' >
       

        <Chatuser/>
       <div className=' flex-sahil overflow-y-auto' style={{maxHeight: "calc(88vh - 10vh)"}}>
       <Message/>
       </div>
        <Type/>
      </div>
    </>
  )
}
