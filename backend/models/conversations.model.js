const mongoose=require('mongoose')

const converstionSchema=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],


    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
        default:[]
    }]


},
    
    
    
    {timestamps:true})

const Conversations=mongoose.model("Conversations",converstionSchema)


    module.exports=
        Conversations
    