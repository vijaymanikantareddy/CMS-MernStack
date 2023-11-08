import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "../startingpages/login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InputGroup from "react-bootstrap/InputGroup";
import "./registyle.css";

function Register() {
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleRollnumberChange = (e) => {
    setRollnumber(e.target.value);
  };

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };

  const submitdata = () => {
    navigate("/");
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowpassword(!showpassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setHasErrors(true);
      setErrorMessage("Passwords does not match.");
      return;
    }
    if (
      !fullname ||
      !rollnumber ||
      !phone ||
      !email ||
      !college ||
      !branch ||
      !password ||
      !confirmpassword ||
      !gender
    ) {
      setHasErrors(true);
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (phone.length !== 10) {
      setHasErrors(true);
      setErrorMessage("Enter Valid Phone Number");
      return;
    }

    // If all fields are filled, proceed with the API call and reset hasErrors
    setHasErrors(false);
    setErrorMessage("");
    axios
      .post("http://localhost:5000/register", {
        email,
        password,
        fullname,
        college,
        branch,
        gender,
        rollnumber,
        phone,
        type: "user",
      })
      .then((result) => {
        // console.log(result);
        navigate("/");
        alert("Registration Done");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mainbody">
      <section className="container">
        <header>Register</header>
        <hr />
        <form className="form">
          <div className="column">
            <div className="input-box">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={fullname}
                onChange={handleFullnameChange}
              />
            </div>
            <div className="input-box">
              <label>Roll Number</label>
              <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollnumber}
                onChange={handleRollnumberChange}
              />
            </div>
          </div>

          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="input-box">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="column">
            <div className="input-box">
              <label>College</label>
              <div className="select-box">
                <select value={college} onChange={handleCollegeChange}>
                  <option hidden>Select</option>
                  <option value="ACET">ACET</option>
                  <option value="ACOE">ACOE</option>
                  <option value="AEC">AEC</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <label>Branch</label>
              <div className="select-box">
                <select value={branch} onChange={handleBranchChange}>
                  <option hidden>Select</option>
                  <option value="IT">IT</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="Mech">MECH</option>
                  <option value="Civil">Civil</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column">
            <button className="verifybutton">
              <span>Send OTP</span>
            </button>

            <div className="input-box">
              <label>OTP</label>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            </div>
            <button className="verifybutton">Verify</button>
          </div>

          <div className="column">
            <div className="input-box">
              <label>Password</label>
              <input
                type={showpassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="verifybutton" onClick={togglePasswordVisibility}>
              <span> {showpassword ? "Hide" : "Show"}</span>
            </button>

            <div className="input-box">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
          </div>

          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value="male"
                  onChange={handleGenderChange}
                />
                <label for="check-male">Male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  value="female"
                  name="gender"
                  onChange={handleGenderChange}
                />
                <label for="check-female">Female</label>
              </div>
            </div>
          </div>
          {hasErrors && <p className="error-message">{errorMessage}</p>}
          <button className="submitbutton" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
