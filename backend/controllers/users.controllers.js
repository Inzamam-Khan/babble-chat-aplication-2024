const User=require('../models/user.model');





const getUsers=async(req,res)=>{

    try{
        
        

        const allUsers=await User.find({ _id: { $ne: req.user._id.toString()}}).select(["-password" ,"-salt"])
        
        res.status(200).json(allUsers)
    
    }

    catch(error){
        console.error("Error in getUsers",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }

}


module.exports={

    getUsers
}