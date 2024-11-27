const multer = require("multer");
const { v4 } = require("uuid");
const { maxImageSize } = require("../config");

//Project Image Storing Config
const ProjectImageStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    const fileName = "-" + file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "project-" + v4() + fileName);
  },
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
});

const saveProjectImage = multer({
  storage: ProjectImageStorage,
  limits: { fileSize: maxImageSize },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return null;
    }
  },
}).single("image");

module.exports = {
  saveProjectImage,
};
