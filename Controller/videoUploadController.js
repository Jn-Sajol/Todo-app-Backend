const videoModel = require("../Model/videoModel");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dafp0ekbn",
  api_key: "375621422136713",
  api_secret: "SMOwhHa7yHw0tdYkNp5pwbYa8k8",
});

const cloudurlpublicid = async (filepath) => {
  try {
    const data = await cloudinary.uploader.upload(filepath);
    console.log(data);
    return {
      url: data.url,
      publicId: data.publicId,
    };
  } catch (error) {
    throw new error("path is not correct");
  }
};

const videoUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: `file is not correct`,
      });
    }

    const { url, publicId } = await cloudurlpublicid(req.file.path);
    const data = new videoModel({
      url,
      publicId,
      createBy: req.user.id,
    });
    await data.save();
    res.status(200).json({
        success:true,
        message:`succcessfuly created video`
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `server error ${error}`,
    });
  }
};

module.exports = videoUpload;
