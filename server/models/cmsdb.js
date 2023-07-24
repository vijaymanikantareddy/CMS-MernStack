const mongoose = require('mongoose');

const cmsSchema = new mongoose.Schema({
    email: String,
    password: String,
    type: String
})

const cmsModel = mongoose.model("cms", cmsSchema)

module.exports = cmsModel