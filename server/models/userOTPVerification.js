const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userOTPVerificationSchema = new Schema({
    userMail: String,
    otp: String
})


const userOTPVerification = mongoose.model(
    "userOTPVerification",
    userOTPVerificationSchema
);