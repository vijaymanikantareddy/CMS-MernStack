const mongoose = require("mongoose");

const cmsSchema = new mongoose.Schema({
  email: String,
  password: String,
  type: String,
  firstname: String,
  lastname: String,
  college: String,
  branch: String,
  rollnumber: String,
  phone: String,
});

const cmsModel = mongoose.model("cms", cmsSchema);

module.exports = cmsModel;
