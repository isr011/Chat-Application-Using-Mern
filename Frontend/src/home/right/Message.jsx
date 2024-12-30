import React, { useEffect, useRef } from "react";
import Messages from "./Messages";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx"

function Message() {
  const { loading, messages } = useGetMessage();
 
 
  // console.log( messages);
  const lastMessageRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMessageRef.current){
        lastMessageRef.current.scrollIntoView({behavior:"smooth"})

      }
      
      
    },100)
  },[messages])

  return (
    <>
    {loading ?(<Loading></Loading>):(messages.length>0 && messages.map((message)=>{
      return <Messages key={message.id} message={message} />

    }) ) }





     <div className="" style={{minHeight: "calc(88vh - 10vh)"}}>
        { !loading &&  messages.length === 0  && (
          <div>
             <p className="text-center font-bold mt-[20%]">
            Say! Hi to start the conversation
          </p>
          </div>
          )}
       
        
     </div>
    </>
  );
}

export default Message;
