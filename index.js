import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './api/routes/auth.js'
import userRoute from './api/routes/user.js'
import hotelRoute from './api/routes/hotels.js'
import roomRoute from './api/routes/rooms.js'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO); 
        console.log("Connected") 
    }   catch(error){
        throw error;
    }
};



//middleware routes 


app.use(cookieParser())



app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

//error handlers
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500 
    const errorMessage = err.message || "500 Internal Server Error"
    return res.status(err).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack:err.stack,
    })
})

app.listen(8800,()=>{
    connect()
    console.log('Server running at http://127.0.8800:8800')
})


