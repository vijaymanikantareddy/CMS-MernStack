const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    email: String,
    phone: String,
    type: String,
    name: String
})

const workerModel = mongoose.model("workers", workerSchema)

module.exports = workerModel;