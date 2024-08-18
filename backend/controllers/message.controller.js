
const Message=require('../models/messsage.model.js')
const Conversations=require('../models/conversations.model.js');
const { io, getReceiverSocketId } = require('../Socket.io/socketIo.js');

const sendMessage=async(req,res)=>{
    const {message}=req.body;
    const {id:receiverId}=req.params;
    
    const senderId=req.user._id
    try{
        let conversations=await Conversations.findOne({
            participants:{ $all:[senderId,receiverId]},
        });


        if(!conversations)
           {
           await  Conversations.create({
                participants:[senderId,receiverId]
            })
           }
           const newMessage=await Message.create({
            senderId:senderId,
            receiverId:receiverId,
            message:message

           })
           if(newMessage) await Conversations.updateOne({participants:{ $all:[senderId,receiverId]}},{ $push:{messages:newMessage._id}})

            const receiverSocketId=getReceiverSocketId(receiverId);
            console.log(receiverSocketId)
            if(receiverSocketId){
                io.to(receiverSocketId).emit('newMessage',newMessage)
            }


           
           res.send(newMessage)
    }

    catch(error){
        console.log(error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
  
}

async function getMessages(req,res){
    const userId=req.user._id;
    
    const {id:userToChatWith}=req.params;
    console.log(userToChatWith)
   try{
     
    const conversations=await Conversations.findOne({
        participants:{$all:[userId,userToChatWith]}
    }).populate("messages")
    console.log(conversations)
    res.status(200).json(conversations?.messages)
   }
   catch(error){
    console.log(error);
    res.status(500).json({error:"Interanl Server Error"})
   }

}

module.exports={
    sendMessage,getMessages
}





