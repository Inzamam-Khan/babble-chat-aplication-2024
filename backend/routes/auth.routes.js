const express=require('express')
const authRouter=express.Router()

const {signup,login,logout}=require('../controllers/auth.controllers')

authRouter.post('/login',login)

authRouter.post('/signup',signup)

authRouter.post('/logout',logout)




module.exports=authRouter







