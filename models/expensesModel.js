const mongoose=require('mongoose')

const expensesModel=new mongoose.Schema({
    expense_id:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    description:{
        type:String
    }
})
const Expenses=mongoose.model('Expenses',expensesModel)
module.exports=Expenses;