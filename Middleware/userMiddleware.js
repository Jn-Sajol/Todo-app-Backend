const jwt = require('jsonwebtoken');

const userMiddleware = (req, res, next) => {
  try {
    // Check if the Authorization header exists
    const tokenFromHeaders = req.headers.authorization;
    if (!tokenFromHeaders) {
      return res.status(401).json({
        success: false,
        message: "Authorization header is missing",
      });
    }

    // Extract the token
    const token = tokenFromHeaders.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing from the Authorization header",
      });
    }

    // Verify the token
    const verifyToken = jwt.verify(token, 'secretkey');
    req.user = verifyToken; // Attach the decoded token payload to the request object

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);

    // Handle specific JWT errors
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired",
      });
    }

    // Generic error response
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const checkAdmin = (req,res,next) =>{
const user = req.user;
if(user.role !== 'admin'){
return res.send('You are not admin');
}
next()
}

module.exports = {userMiddleware,checkAdmin};
