const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "videoupload/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const filefilter = (req, file, cb) => {
    const allowedTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('This is not a video. Please upload a valid video.'));
    }
  };
  
  const maxSize = 50 * 1024 * 1024; // 50 MB size limit
  
  module.exports = multer({
    storage: storage,
    fileFilter: filefilter,
    limits: { fileSize: maxSize }, // Add file size limit
  });