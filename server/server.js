// // server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cmsModel = require("./models/cmsdb");
const complaintModel = require("./models/complaintform");

const nodemailer = require("nodemailer");
const workerModel = require("./models/workerdb");
// const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://vijaymanikantareddy:vijay123@cluster0.8txcp3s.mongodb.net/cmsdb"
);

app.listen(5000, () => {
  console.log("Server is Running");
});

if (mongoose) {
  console.log("db connected");
} else {
  console.log("db not connected");
}

app.get("/getuserdata", async (req, res) => {
  try {
    const data = await cmsModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from the database" });
  }
});

app.post("/getuser", (req, res) => {
  const { roll } = req.body;
  cmsModel.findOne({ roll: roll }).then((user) => {
    if (user) {
      res.json("success");
    } else {
      res.json("No such record exists");
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  cmsModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        if (user.type === "user") {
          res.json("successuser");
        } else if (user.type === "admin") {
          res.json("successadmin");
        }
      } else {
        res.json("Incorrect Password");
      }
    } else {
      res.json("No such record exists");
    }
  });
});

app.post("/addworker", (req, res) => {
  workerModel
    .create(req.body)
    .then((workers) => res.json(workers))
    .catch((err) => res.json(err));
});

app.post("/register", (req, res) => {
  const { email } = req.body;
  cmsModel.findOne({ email }).then((user) => {
    // const newUser = new user({
    //   email,
    //   password,
    //   verified: false
    // });
    // newUser.save()
    // .then((result) =>{
    //   sendOTPVerificationMail(result, res)
    // })

    // if (user) {
    //   cmsModel
    //     .findOneAndUpdate({ email }, req.body, { new: true })
    //     .then((updateuser) => {
    //       res.json(updateuser);
    //     })
    //     .catch((err) => {
    //       res.status(500).json({ error: "Error Updating Existing Record" });
    //     });
    // } else {
    cmsModel
      .create(req.body)
      .then((cms) => res.json(cms))
      .catch((err) => res.json(err));
    // }
  });
});

app.post("/registercom", (req, res) => {
  const {
    email,
    college,
    building,
    location,
    date,
    type,
    comDes,
    remark,
    status,
  } = req.body;
  complaintModel
    .create(req.body)
    .then((complaints) => res.json(complaints))
    .catch((err) => res.json(err));
});

app.get("/allcomplaints", async (req, res) => {
  try {
    const data = await complaintModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from the database" });
  }
});

app.post("/deletecomplaint", async (req, res) => {
  const { userid } = req.body;
  try {
    complaintModel.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/updatecomplaint", (req, res) => {
  const { id, worker } = req.body;
  complaintModel.findOne({ id }).then((complaint) => {
    // const newUser = new user({
    //   email,
    //   password,
    //   verified: false
    // });
    // newUser.save()
    // .then((result) =>{
    //   sendOTPVerificationMail(result, res)
    // })

    if (complaint) {
      complaintModel
        .findOneAndUpdate({ id }, req.body, { new: true })
        .then((updateComplaint) => {
          res.json(updateComplaint);
        })
        .catch((err) => {
          res.status(500).json({ error: "Error Updating Existing Record" });
        });
    } else {
      cmsModel
        .create(req.body)
        .then((cms) => res.json(cms))
        .catch((err) => res.json(err));
    }
  });
});

// OTP Verification
// const sendOTPVerificationMail = async({_id, email}, res) =>{
//   try{
//     const otp = `${Math.floor(1000+Math.random()*9000)}`;
//     const mailOptions = {
//       from: process.env.AUTH_EMAIL,
//       to: email,
//       subject:"Verify Your Email",
//       html: `<p>Enter ${otp} in the app to verify your mail <br>The Code Expires in 10 minutes</p>`
//     };

//     const saltRounds = 10;

//     const hashedOTP = await bcrypt.hash(otp, saltRounds);
//     new userOTPVerification({
//       userId: _id,
//       otp: hashedOTP,
//       createdAt: Date.now(),
//       expiresAt: Date.now()*600000,
//     });

//     await newOTPVerification.save();
//     transporter.sendMail(mailOptions);
//     res.json({
//       status: "PENDING",
//       message: "Verification otp email sent",
//       data:{
//         userId: _id,
//         email
//       }
//     });
//   }catch(err){
//     res.json({
//       status:"FAILED",
//       message: err.message
//     })
//   }
// }

// app.post('/verifyOTP', async(req, res) =>{
//   try{
//     let {userId, otp} = req.body;
//     if(!userId || !otp){
//       throw Error("Empty OTP details are not allowed");
//     }else{
//       const userOTPVerificationRecords = await userOTPVerification.find({
//         userId,
//       })
//       if(userOTPVerificationRecords <= 0){
//         // throw new Error(
//         //   "Ac"
//         // )
//       }else{
//         const {expiresAt} = userOTPVerificationRecords[0];
//         const hashedOTP = userOTPVerificationRecords[0].otp;

//         if(expiresAt < Date.now()){
//           await userOTPVerification.deleteMany({userId});
//           throw new Error("Code expired, request again")
//         }else{
//           const validOTP = await bcrypt.compare(otp, hashedOTP);

//           if(!validOTP){
//             throw new Error("Invalid OTP")
//           }else{
//             await user.updateOne({_id: userId}, {verified: true});
//             await userOTPVerification.deleteMany({userId});
//             res.json({
//               status:"VERIFIED",
//               message: `User email verified successfully `
//             })
//           }
//         }
//       }
//     }
//   }catch(err){
//     res.json({
//       status: "FAILED",
//       message: err.message
//     })
//   }
// })
