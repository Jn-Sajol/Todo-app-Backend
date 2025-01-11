const multer = require('multer');
const path = require('path');

// Configure Multer storage to specify the destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the uploads folder exists (create if not)
    const uploadDir = path.join(__dirname, 'uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Sanitize file name by replacing special characters
    const cleanFileName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${Date.now()}-${cleanFileName}`;
    cb(null, fileName); // Set the sanitized file name
  }
});

// Initialize Multer with the defined storage
const multerMiddleware = multer({ storage });

// Export the upload middleware
module.exports = multerMiddleware;
