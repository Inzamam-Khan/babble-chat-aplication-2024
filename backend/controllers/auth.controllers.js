const { createToken } = require("../jwt/jwt");
const User = require("../models/user.model");



//create user
const signup=async(req,res)=>{
    

    try{
        const {fullName,userName,password,gender}=req.body
        
       const user= await User.findOne({userName})

       if(user) return res.status(503).json({error:`Username Already Exits`})
       
       if(!user){
        const result=await User.create({fullName,userName,password,gender})
        
        const token=createToken(result);
        res.cookie("token",token)
        return res.json({fullName:result.fullName,userName:result.userName,gender:result.gender,profilePic:result.profilePic,_id:result._id})
        
 
       }
    }
    catch(error){

        console.log(error.message)
        return res.status(400).json(error.message)

    }

}


//user login 
const login=async (req,res)=>{
    try{
        let {userName,password}=req.body;
        let {token,user}=await User.matchPassword(userName,password) //returning jwt token
        
        res.cookie("token",token)
        
        return res.json({fullName:user.fullName,userName:user.userName,gender:user.gender,profilePic:user.profilePic,_id:user._id})
    }
    catch(error){
        console.log(error.message);
        return res.send(error.message)
    }
   
}

const logout=(req,res)=>{
try {
    res.cookie("token","",{maxAge:0})
    res.status(200).json("Logged Out Successfully")
} catch (error) {
    console.log(error.message);
    res.status(500).json({error:"Internal Server Error"})
    
}  
}



module.exports={
    signup,login,logout
}