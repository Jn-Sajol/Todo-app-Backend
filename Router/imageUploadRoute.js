const express = require ('express');
const imageUpload = require('../Controller/imageUploadController');
// const {userMiddleware,checkAdmin} = require('../Middleware/userMiddleware')
const multerMiddleware = require('../Middleware/imageMiddlewareMulter')
const router = express.Router();

router.post('/upload',multerMiddleware.single('image'),imageUpload)


module.exports = router;