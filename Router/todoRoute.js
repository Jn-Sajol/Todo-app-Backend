const express =  require('express');
const { getalltask, getsigleTask, createtask, updatetask, deletetask } = require('../Controller/todoController');
const router = express.Router();

router.post('/createtask',createtask)
router.get('/getalltask',getalltask)
router.get('/singletask/:id',getsigleTask)
router.put('/updatetask/:id',updatetask)
router.delete('/deletetask/:id',deletetask)

module.exports = router;
