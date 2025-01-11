const express =  require('express');
const { getalltask, getsigleTask, createtask, updatetask, deletetask } = require('../Controller/todoController');
const router = express.Router();

router.get('/getalltask',getalltask)
router.get('/singletask/:id',getsigleTask)
router.post('/createtask',createtask)
router.put('/updatetask',updatetask)
router.delete('/deletetask',deletetask)

module.exports = router;
