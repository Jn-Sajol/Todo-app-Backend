const videoModel = require("../Model/videoModel");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dafp0ekbn",
  api_key: "375621422136713",
  api_secret: "SMOwhHa7yHw0tdYkNp5pwbYa8k8",
});

const cloudurlpublicid = async (filepath) => {
  try {
    const data = await cloudinary.uploader.upload(filepath, {
      resource_type: "video",
    });
    console.log(data);
    return {
      url: data.url,
      publicId: data.public_id,
    };
  } catch (error) {
    // Corrected error instantiation: should be `new Error()`
    throw new Error("Failed to upload video to Cloudinary: " + error.message);
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
      //   createBy: req.user._id,
    });
    await data.save();
    res.status(200).json({
      success: true,
      message: `succcessfuly created video`,
    });
  } catch (error) {
    console.error("Error occurred during video upload:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error: " + error.message,
    });
  }
};

module.exports = videoUpload;
