const multer = require("multer");
const path = require("path");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "imageupload/"); // Ensure the "imageupload" directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)); // Append the file extension
  },
});

// File filter for images
const filterPath = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("This is not an image. Please upload an image."));
  }
};

// Initialize Multer middleware
const multerMiddleware = multer({
  storage: storage,
  fileFilter: filterPath,
});

module.exports = multerMiddleware;
