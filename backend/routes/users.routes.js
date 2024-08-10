const express=require('express')
const usersRoutes=express.Router();
const {getUsers}=require('../controllers/users.controllers')

usersRoutes.get('/',getUsers)




module.exports={
    usersRoutes
}