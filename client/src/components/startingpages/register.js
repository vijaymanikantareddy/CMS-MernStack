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

function Register() {
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleRollnumberChange = (e) => {
    setRollnumber(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };

  const submitdata = () => {
    navigate("/");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = (e) => {
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
    if (password != confirmpassword) {
      alert("passwords does not match");
      return;
    }
    axios
      .post("http://localhost:5000/register", {
        email,
        password,
        firstname,
        lastname,
        college,
        branch,
        rollnumber,
        phone,
        type: "user",
      })
      .then((result) => {
        console.log(result);
        navigate("/");
        alert("Registration Done");
      })
      .catch((err) => console.log(err));
  };

  // const handleOTPRequest = () => {
  //   axios
  //     .post("http://localhost:5000/verifyOTP", { email })
  //     .then((response) => {
  //       console.log("OTP Requested Successfully: ", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error requesting OTP: ", error);
  //     });
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600 ">
      <div
        className="  p-6 bg-gray-100 shadow-lg rounded-md"
        style={{ width: "50vw" }}
      >
        <h1 className="text-3xl block text-center font-semibold">Register</h1>
        <hr className="mt-3 " />
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                <b>First Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstname}
                onChange={handleFirstnameChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                <b>Last Name</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastname}
                onChange={handleLastnameChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                <b>College</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter College Name"
                value={college}
                onChange={handleCollegeChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                <b>Branch</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Branch"
                value={branch}
                onChange={handleBranchChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                <b>Mail ID</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                <b>OTP Verification</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOtpChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                <b>Roll Number</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Roll Number"
                value={rollnumber}
                onChange={handleRollnumberChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                <b>Phone Number</b>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                <b>Password</b>
              </Form.Label>
              <div className="input-group">
                <input
                  type={showpassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Enter New Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-primary indigo"
                  onClick={togglePasswordVisibility}
                >
                  <i> {showpassword ? "Hide" : "Show"}</i>
                </button>
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                <b>Confirm Password</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={handleConfirmPasswordChange}
              />
            </Form.Group>
          </Row>

          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <Link
                to="/login"
                href=""
                className="text-indigo-800 font-semibold no-underline "
              >
                Already Registered?
              </Link>
            </div>
          </div>
          <br></br>

          <Button
            variant="primary"
            type="submit"
            className="border-2 border-indigo-800 bg-indigo-700 text-white py-1 w-full rounded-md hover:text-black font-semibold hover:bg-indigo-900 "
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
