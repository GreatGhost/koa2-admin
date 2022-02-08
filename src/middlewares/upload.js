const multer = require("@koa/multer");
const { UPLOAD_DIR } = require("../config/constants");
const storage = multer.diskStorage({
  destination: function (ctx, file, cb) {
    cb(null, UPLOAD_DIR);
  },
  filename: function (ctx, file, cb) {
    const filename = file.originalname.split(".")[0].toString("binary");
    const fileType = file.originalname.split(".")[1];
    cb(null, `${filename}-${Date.now()}.${fileType}`);
  },
});

const limits = {
  fileSize: 1024 * 1024,
  files: 1,
};

const upLoad = multer({
  storage,
  limits,
}).single("file");

module.exports = {
  upLoad,
};
