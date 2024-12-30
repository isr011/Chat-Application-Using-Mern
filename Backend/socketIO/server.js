import {Server} from "socket.io"
import http from "http"
import express from "express"


const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:4001/",
        methods: ["GET", "POST"],
        
        }

});
const users={}
io.on("connection",(socket)=>{
    console.log("a new client connected",socket.id);
    const userId= socket.handshake.query.userId
    if(userId){
        users[userId]=socket.id
        
    }
    io.emit("getOnlineUsers", Object.keys(users));


socket.on("disconnect",()=>{
    console.log(" client disconnected",socket.id);
    delete users[userId];
    io.emit("getOnlineUsers", Object.keys(users));
})


})
export{app,io,server}