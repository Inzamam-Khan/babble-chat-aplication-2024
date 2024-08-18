const dotenv=require('dotenv')
const path=require('path')
const {app,server}=require('./backend/Socket.io/socketIo.js')
const authRouter=require('./backend/routes/auth.routes.js')
const messageRoutes =require('./backend/routes/message.routes.js')
const {usersRoutes}=require('./backend/routes/users.routes.js')


const express=require('express')
const connectToMongoDb = require('./backend/db/connectToDb.js');
const cookieParser = require('cookie-parser');
const protectRoutes=require('./backend/middlewares/protectRoutes.js')




dotenv.config();
const PORT=process.env.PORT || 5000;

// app.use(express.static("assets"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


server.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server started at ${PORT}`)
})

// const __dirname=path.resolve()


app.use(express.static(path.join(__dirname,'/frontend/dist')))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"/frontend","dist","index.html"))
})

app.use('/api/auth',authRouter);

app.use('/api/messages',protectRoutes,messageRoutes)

app.use('/api/users',protectRoutes,usersRoutes)

app.get('/',(req,res)=>{res.send(`Server Page ${PORT}`)})