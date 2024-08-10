const { validateToken } = require("../jwt/jwt");


const User=require('../models/user.model.js')
const protectRoutes=async (req,res,next)=>{
    try{

        const token=req.cookies.token;
        if(!token) return res.status(500).json({error:"Unauthorized!!!"})

            const decoded =validateToken(token)
            if(!decoded)  return res.status(500).json({error:"Unauthorized"})

            const user=await User.findById(decoded.userId).select(["-password","-salt",])
            if(!user) return res.status(404).json({error:"User Not Found"})
            
            req.user=user
            
        next()
    }
    catch(Error){

    }

}



module.exports=protectRoutes