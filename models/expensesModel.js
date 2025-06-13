const mongoose=require('mongoose')

const expensesModel=new mongoose.Schema({
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