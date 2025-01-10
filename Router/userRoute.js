const express = require('express');
const { userRegister, userLogin, userPrivetRoute } = require('../Controller/userController');
const {checkAdmin,userMiddleware} = require('../Middleware/userMiddleware');
const router = express.Router();

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/privet',userMiddleware,checkAdmin,userPrivetRoute)

module.exports = router;