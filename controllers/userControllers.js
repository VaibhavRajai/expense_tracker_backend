const express=require('express')
const User=require('../models/userModel')

const signUp=async (req,res)=>{
    try{
          const { firstName, lastName, email, username, password } = req.body;
        
          //checking for an existing email
          const existingEmail=await User.findOne({email})

          if(existingEmail){
            return res.status(400).json({message:"User already exists with this email"})
          }
          //checking for an existing username
          const existingUsername=await User.findOne({username})

          if(existingUsername){
            return res.status(400).json({message:"Username already exists"})
          }

          const newUser=new User({firstName,lastName,email,username,password});
          await newUser.save();

          res.status(201).json({message:"Signup Successfull"})

    }catch(error){
        res.status(500).json({message:error.message})
    }

}

const login=async (req,res)=>{
    try{
        const {username,password}=req.body;
        if(!username || !password) {
            return res.status(400).json({message:"Both fields are required"})
        }
        const existingUsername=await User.findOne({username})
        if(!existingUsername){
            return res.status(404).json({message:"Username doesn't exists"})
        }else{
            if(existingUsername.password==password){
                return res.status(200).json({message:"Login Successfull"})
            }
        }
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

module.exports={
    signUp,login
}