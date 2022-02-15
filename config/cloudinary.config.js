const multer = require("multer")
const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary")

const CloudinaryAccount = cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_KEY,
  api_secret:process.env.CLOUDINARY_SECRET,
})

const storage = new CloudinaryStorage({
  cloudinary: CloudinaryAccount,
  params:{
    folder:"cappuccino",
    allowed_formats:["svg","png","jpg","tif","web","pdf"]
  }
})

module.exports = multer({storage});

