const mongoose = require('mongoose');

const urlMongo = process.env.URL_DATABASE || "mongodb://localhost:27017/codeNegar"
console.log(urlMongo)

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            console.log("Using database connection ")
            return true
        }
        const connection = await mongoose.connect(urlMongo,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if(connection){
            console.log("Connected to mongoDB successfully ✅")
            return true
        }
    } catch(error){
        console.log("Database connection is error " , error)
        process.exit(1)
    }
}

module.exports = connectToDB