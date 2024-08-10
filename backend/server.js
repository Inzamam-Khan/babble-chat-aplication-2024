const dotenv=require('dotenv')

const authRouter=require('./routes/auth.routes')
const messageRoutes =require('./routes/message.routes.js')
const {usersRoutes}=require('./routes/users.routes.js')


const express =require('express');
const connectToMongoDb = require('./db/connectToDb');
const cookieParser = require('cookie-parser');
const protectRoutes=require('./middlewares/protectRoutes.js')



const app=express();
dotenv.config();
const PORT=process.env.PORT || 5000;

app.use(express.static("assets"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server started at ${PORT}`)
})



app.use('/api/auth',authRouter);

app.use('/api/messages',protectRoutes,messageRoutes)

app.use('/api/users',protectRoutes,usersRoutes)

app.get('/',(req,res)=>{res.send(`Server Page ${PORT}`)})