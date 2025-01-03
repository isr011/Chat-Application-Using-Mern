import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./route/user.route.js"
import messageRoute from "./route/message.route.js"
import{app} from "./socketIO/server.js"
import { server } from "./socketIO/server.js";
// const app = express()
dotenv.config();

app.use(express.json())
// app.use(cookieParser());
app.use(cors());
app.use(cookieParser());

const PORT =process.env.PORT || 5001;
const URI= process.env.MONGODB_URI
try {
    mongoose.connect(URI)
    console.log("connected to mongodb")
    
    
} catch (error) {
    console.log(error)
    
}

app.use("/api/user",userRoute)
app.use("/api/message",messageRoute)


server.listen(PORT, () => {
  console.log(`server is  running at ${PORT}`)
})