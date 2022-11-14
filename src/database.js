const mongoose = require('mongoose')
require ('dotenv').config()

const connectDB = async()=> {
    try{
        await mongoose.connect(
            "mongodb+srv://maximo:<password>@cluster0.8c0b957.mongodb.net/?retryWrites=true&w=majority"

        )
        console.log("db connected")
    } catch (error){
        console.error(error)
    }
}

module.exports = {connectDB}


