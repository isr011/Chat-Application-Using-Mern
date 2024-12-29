import React from 'react'

function Messages({message}) {
  const authUser = JSON.parse(localStorage.getItem("messenger"));
  const itsMe = message.senderId === authUser.user._id;
// console.log(authUser.user._id);
// console.log(message.senderId);
const chatName = itsMe ? " chat-end" : "chat-start";
const chatColor = itsMe ? "bg-blue-500" : "";





  return (
    <>
       <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
        </div>

        {/* <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-accent">
            That's never been done in the history of the Jedi. It's insulting!
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Messages




