const mongoose = require("mongoose");

const cmsSchema = new mongoose.Schema({
  email: String,
  password: String,
  type: String,
  fullname: String,
  gender: String,
  college: String,
  branch: String,
  rollnumber: String,
  phone: String,
});

const cmsModel = mongoose.model("cms", cmsSchema);

module.exports = cmsModel;
