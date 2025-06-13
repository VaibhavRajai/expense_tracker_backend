const express=require('express')
const dotenv=require('dotenv')
const connect=require('.//config/db')
const app=express()
const cors=require('cors')
const userRoute=require('./routes/userRoutes')
dotenv.config()
connect()
app.use(express.json())
app.use(cors())
const mongoose=require('mongoose')
app.use('/api',userRoute)
// console.log(process.env.MONGO_URI)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Server Started')
})


console.log(mongoose.connection.readyState)