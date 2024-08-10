const mongoose=require('mongoose')
const path=require('path')
const {createHmac,randomBytes}=require("crypto");
const { createToken } = require('../jwt/jwt');
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,required:true
    },
    userName:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true,
        minlength:6
    },
    salt:{
        type:String,
    },
    gender:{
        type:String,required:true,
        enum:['male','female']
    },
    profilePic:{
        type:String,default:"https://api.dicebear.com/8.x/avataaars/svg"
    }
},{timestamps:true})



userSchema.pre("save",function(next){
    const user=this;
    const salt=randomBytes(16).toString();
    const hashedPassword=createHmac("sha256",salt).update(user.password).digest("hex");

    user.salt=salt;
    user.password=hashedPassword;

    next();
})

userSchema.static("matchPassword",async function(userName,password){
    const user=await this.findOne({userName});
    
    if(!user) throw new Error("User Not Found");

    const salt=user.salt;
    const dbHashedPassword=user.password;

    const userProviedHashed=createHmac("sha256",salt).update(password).digest("hex");


    if(dbHashedPassword != userProviedHashed) throw new Error("Invalid Password");

    
     return {token:createToken(user),user};
}
)




const User=mongoose.model('User',userSchema)


module.exports=User