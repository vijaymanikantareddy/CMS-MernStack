const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    email: String,
    college: String,
    building: String,
    location: String,
    dat: Date,
    comtype: String,
    comdes: String,
    remark: String
})

const complaintModel = mongoose.model("complaints", complaintSchema)

module.exports = complaintModel