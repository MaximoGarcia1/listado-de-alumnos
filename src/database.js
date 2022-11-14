const mongoose = require('mongoose')
require ('dotenv').config()

const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI
:'mongodb+srv://maximo:MBG28032006@cluster0.8c0b957.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useNewUrlParser: true,
})

const connection = mongoose.connection

connection.once('open',()=>{
    console.log("BD CONECTADA")
})