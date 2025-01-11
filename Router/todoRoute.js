const express =  require('express');
const { getalltask, getsigleTask, createtask, updatetask, deletetask } = require('../Controller/todoController');
const {checkAdmin, userMiddleware}  = require('../Middleware/userMiddleware');
const router = express.Router();

router.post('/createtask',createtask)
router.get('/getalltask',getalltask)
router.get('/singletask/:id',getsigleTask)
router.put('/updatetask/:id',updatetask)
router.delete('/deletetask/:id',userMiddleware,checkAdmin,deletetask)

module.exports = router;
