require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const postRouter = require('./routers/post') ;

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.ob9xiss.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("ConnectDB to Mongoose Succesfully") ;
    } catch (error) {
        console.log(error) ;
        process.exit(1) ;
    }
}

connectDB() ;

const app = express() ;

app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended:true,limit:'30mb'}))
app.use(cors()) ;

const PORT = process.env.port || 5000 ;


// Router

app.use('/post', postRouter) ;



app.listen( PORT , () => {
    console.log(`SERVER is running on port ${PORT}`) ;
})