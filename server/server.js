// // server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cmsModel = require("./models/cmsdb");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/cmsdb");

app.listen(3001, () => {
  console.log("Server is Running");
});


app.post('/login', (req, res) =>{
  const {email, password} = req.body;
  cmsModel.findOne({email: email})
  .then(user =>{
    if(user){
      if(user.password === password){
        if(user.type === 'user'){
          res.json('successuser')
        }else if(user.type === 'admin'){
          res.json('successadmin')
        }
      }else{
        res.json("Incorrect Password")
      }
    }else{
      res.json("No such record exists")
    }
  })
})


app.post("/register", (req, res) => {
  cmsModel
    .create(req.body)
    .then((cms) => res.json(cms))
    .catch((err) => res.json(err));
});

