import {  createContext, useEffect, useState } from "react"
import {useAuth} from "./AuthProvider.jsx"
import { use } from "react";
import io from "socket.io-client";




const  socketContext = createContext();


export const SocketProvider = ({Children})=>{
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [authUser] = useAuth();

    useEffect(()=>{
        if (authUser) {
            const socket = io("http://localhost:5002", {
              query: {
                userId: authUser.user._id,
              },
            });
        //    setSocket(socket)
           setSocket(socket);
           socket.on("getOnlineUsers", (users) => {
             setOnlineUsers(users);
           });
           return () => socket.close();


          }  else{
            if (socket) {
                socket.close();
                setSocket(null);
              }
            

          }
    },[authUser])
    return(
<socketContext.Provider value={{socket,onlineUsers}}>
    {Children}
</socketContext.Provider>


    )



}