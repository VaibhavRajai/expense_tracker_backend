const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()

const connect=async ()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URI)
        if(connection){
            console.log('DB Connected')
        }
    }catch(error){
        console.log(error)
    }
}

module.exports=connect