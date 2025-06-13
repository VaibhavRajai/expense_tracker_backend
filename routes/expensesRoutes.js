const express=require('express')
const router=express.Router()

const expensesController=require('../controllers/expensesController')

router.put('/addExpense',expensesController.addExpense)
module.exports=router;