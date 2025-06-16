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

module.exports = {
    addExpense
};
