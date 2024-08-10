const mongoose= require('mongoose')

async function connectToMongoDb()
{
    try{
        mongoose.connect(process.env.MONGO_DB_URI).then(()=>{console.log("database connected")})
        .catch(error=>{console.log(error.message)})
        

    }
    catch(error){
        console.log(error.message)
    }
}

module.exports=connectToMongoDb