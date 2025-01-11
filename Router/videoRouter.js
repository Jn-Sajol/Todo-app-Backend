const express = require('express');
const videoUpload = require('../Controller/videoUploadController');
const router = express.Router();

router.post('/upload',videoUpload)