const express=require('express')

const {sendMessage,getMessages}=require('../controllers/message.controller.js')


const router=express.Router();


router.post('/send/:id',sendMessage)

router.get('/:id',getMessages)


module.exports=router;