const expensesModel=require('../models/expensesController')
const connect=require('../config/db')
const {v4:uuidv4} =require('uuid')
const addExpense=async (req,res)=>{
    await connect();
    try{
        const expense_id=uuidv4();
        const {username,title,category,date,amount,description}=req.body
        const newExpense=new expensesModel({
            expense_id,
            username,
            title,
            category,
            date,
            amount,
            description
        })
        await newExpense.save();

        res.status(201).json({message:"Expense Added successfully"})

        
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
module.exports={
    addExpense
}