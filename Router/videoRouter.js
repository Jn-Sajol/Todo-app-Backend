const express = require('express');
const videoUpload = require('../Controller/videoUploadController');
const {userMiddleware,checkAdmin} = require('../Middleware/userMiddleware')
const videoUploaderMulter = require('../Middleware/videoUploadMulter')
const router = express.Router();

router.post('/upload',videoUploaderMulter.single('video'),videoUpload)

module.exports = router;