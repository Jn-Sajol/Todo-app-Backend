const OwnerModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    console.log(req.body);
    const findDuplicate = await OwnerModel.find({
      $or: [{ username }, { email }],
    });

    if (findDuplicate.length > 0) {
      return res.status(300).json({
        success: false,
        message: "username and email already exist",
      });
    }
    const bcryptPass = await bcrypt.hash(password, 10);
    console.log(bcryptPass);

    const user = new OwnerModel({
      username,
      email,
      password:bcryptPass,
      role: role || "user",
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "successfully created a user",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//userlogin controller
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //getting that specific user
    const user = await OwnerModel.findOne({ email });

    const comparePass = await bcrypt.compare(password,user.password);
    if(!comparePass){
        return res.send('invalid cradential')
    }
    //jwt implements
    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
        role: user.role,
      },
      "secretkey",
      { expiresIn: "30m" }
    );
    res.status(200).json({
        success:true,
        message:'user login successfully',
        token:token,
        user:user
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//User Privet Router
const userPrivetRoute = async (req,res) =>{
res.send('welcome to privet admin router')
}

module.exports = { userLogin, userRegister,userPrivetRoute };
