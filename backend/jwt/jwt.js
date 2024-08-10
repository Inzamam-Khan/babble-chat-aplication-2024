const jwt=require('jsonwebtoken');

const secret='12345'

const createToken=(props)=>{
   
    const payload={
        userId:props._id,
        fullName:props.fullName,
        userName:props.userName,
        gender:props.gender,
        profilePic:props.profilePic
    }

    const token=jwt.sign(payload,process.env.JWT_SECRET)
    return  token

}


const validateToken=(token)=>{
    const payload=jwt.verify(token,process.env.JWT_SECRET);
    return payload;

}


module.exports={validateToken,createToken
    
}