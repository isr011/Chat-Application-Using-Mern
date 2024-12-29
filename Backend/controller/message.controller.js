import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
export const sendMessage = async(req,res)=>{
    // console.log("message send " ,req.params.id, req.body.message)
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
        let  conversation= await Conversation.findOne({
            members: { $all: [senderId, receiverId] },

        })
        if(!conversation){
            conversation = await Conversation.create({
                members: [senderId, receiverId],
               

            }) 
            const newMessage =  new Message({
                 senderId,
                 receiverId,
                 message
            })
            if(newMessage){
                 conversation.messages.push(newMessage._id);
            }
            await Promise.all([conversation.save(),newMessage.save() ])
            res.status(201).json({message : "Message sent successfully", newMessage})




        }
        
    } catch (error) {
        console.log(" error in sending messaage " + error)
        res.status(500).json({ message: "Internal server error "})


        
        
    }

}


export const getMessage = async(req,res)=>{
    try {
        const {id: chatuser} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            members: { $all: [senderId, chatuser] },
            }).populate("messages");
            if(!conversation){
                return res.status(201).json({ message: "Conversation not found" })
                }
                const messages = conversation.messages;
                res.status(201).json({messages});


        
    } catch (error) {
        console.log(" error in getting message " + error)
        res.status(500).json({ message: "Internal server error "})
        
    }

}