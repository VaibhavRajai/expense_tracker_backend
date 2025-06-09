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

app.use('/api',userRoute)

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Server Started')
})