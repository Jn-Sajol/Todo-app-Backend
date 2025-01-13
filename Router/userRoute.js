const express = require('express');
const { userRegister, userLogin, userPrivetRoute, changePass } = require('../Controller/userController');
const {checkAdmin,userMiddleware} = require('../Middleware/userMiddleware');
const router = express.Router();

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/privet',userMiddleware,checkAdmin,userPrivetRoute)
router.post('/changepass',userMiddleware,checkAdmin,changePass)

module.exports = router;