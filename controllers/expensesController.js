const Expenses = require('../models/expensesModel'); 
const connect = require('../config/db');

const addExpense = async (req, res) => {
    await connect();
    try {
        const { username, title, category, date, amount, description } = req.body;
        const newExpense = new Expenses({
            username,
            title,
            category,
            date,
            amount,
            description
        });
        await newExpense.save();

        res.status(201).json({ message: "Expense Added successfully" });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const viewExpensesByUsername=async(req,res)=>{
    await connect();
    try{
        const {username}=req.body;
        if(!username){
            return res.status(400).json({message:"Username is required"})
        }
        const expenses=await Expenses.find({username});

        if(expenses.length==0){
            return res.status(404).json({message:"No Exepenses yet!!"})
        }
        res.status(200).json({expenses})
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
module.exports = {
    addExpense,
    viewExpensesByUsername
};
