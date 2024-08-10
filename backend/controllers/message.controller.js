
const Message=require('../models/messsage.model.js')
const Conversations=require('../models/conversations.model.js')

const sendMessage=async(req,res)=>{
    const {message}=req.body;
    const {id:receiverId}=req.params;
    
    const senderId=req.user._id
    try{
        let conversations=await Conversations.findOne({
            participants:{$all:[senderId,receiverId]},
        });


        if(!conversations)
           {
            Conversations.create({
                participants:[senderId,receiverId]
            })
           }
           const newMessage=await Message.create({
            senderId:senderId,
            receiverId:receiverId,
            message:message

           })
           if(newMessage) await Conversations.updateOne({$push:{messages:newMessage._id}})

           
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
   try{
     
    const conversations=await Conversations.findOne({
        participants:{$all:[userId,userToChatWith]}
    }).populate("messages")
    res.status(200).json(conversations.messages)
   }
   catch(error){
    console.log(error.message);
    res.status(500).json({error:"Interanl Server Error"})
   }

}

module.exports={
    sendMessage,getMessages
}





