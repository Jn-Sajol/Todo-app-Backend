const cloudinary = require("cloudinary").v2;
const imageModel = require("../Model/fileUploadModel");

cloudinary.config({
  cloud_name: "dafp0ekbn",
  api_key: "375621422136713",
  api_secret: "SMOwhHa7yHw0tdYkNp5pwbYa8k8"
});

//
const clouinariUploadHelper = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath);
    return {
      url: result.url,
      publicId: result.public_id,
    };
  } catch (error) {
    throw new error("something wrong");
  }
};

const imageUploade = async (req, res) => {
//   console.log(req.file.path)
  try {
    if (!req.file) {
      return res.status(500).json({
        success: false,
        message: "Image not provide",
      });
    }
    const { url, publicId } =  await clouinariUploadHelper(req.file.path);
    console.log(url)

    const data = new imageModel({
      url,
      publicId,
      createBy:req.user.id
    });
    await data.save();

    res.status(200).json({
      success: true,
      message: "image upload successfyllu",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

module.exports = imageUploade;
