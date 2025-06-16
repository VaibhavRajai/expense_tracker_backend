const express=require('express')
const router=express.Router()

const expensesController=require('../controllers/expensesController')

router.post('/addExpense',expensesController.addExpense)
router.post('/viewExpensesByUsername',expensesController.viewExpensesByUsername)
module.exports=router;