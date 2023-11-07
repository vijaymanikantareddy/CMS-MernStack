const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  email: String,
  college: String,
  building: String,
  location: String,
  room: String,
  date: Date,
  type: String,
  comdes: String,
  remark: String,
  status: String,
  floor: String,
  worker: String,
});

const complaintModel = mongoose.model("complaints", complaintSchema);

module.exports = complaintModel;
