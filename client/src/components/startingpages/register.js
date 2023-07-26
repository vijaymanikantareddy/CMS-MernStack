import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/registyle.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  // const [showpassword, setShowpassword] = useState('');
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmpassword(e.target.value);
  };

  const handleOTP = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      alert("passwords does not match");
      return;
    }
    axios
      .post("http://localhost:5000/register", { email, password, type: "user" })
      .then((result) => {
        console.log(result);
        navigate("/");
        alert("Registration Done");
      })
      .catch((err) => console.log(err));
  };

  const handleOTPRequest = () => {
    axios
      .post("http://localhost:5000/verifyOTP", { email })
      .then((response) => {
        console.log("OTP Requested Successfully: ", response.data);
      })
      .catch((error) => {
        console.error("Error requesting OTP: ", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600 ">
      <div className="w-96  p-6 bg-gray-100 shadow-lg rounded-md">
        <h1 className="text-3xl block text-center font-semibold">Register</h1>
        <hr className="mt-3 " />
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label for="mail" className="block text-base mb-2 font-bold ">
              Email
            </label>

            <div className="input-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="button"
                className="btn btn-outline-primary indigo"
                onClick={handleOTPRequest}
              >
                <i> Send OTP </i>
              </button>
            </div>
          </div>

          {/* OTP  */}
          <div className="mt-3">
            <label for="otp" className="block text-base mb-2 font-bold">
              OTP
            </label>

            <div className="input-group">
              <input
                type="text"
                name="otp"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOTP}
              />
              <button type="button" className="btn btn-outline-primary indigo">
                <i> Verify </i>
              </button>
            </div>
          </div>

          {/* New password */}
          <div className="mt-3">
            <label for="password" className="block text-base mb-2 font-bold">
              New Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
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
                <i> {showPassword ? "Hide" : "Show"}</i>
              </button>
            </div>
          </div>

          {/* Confirm New password */}
          <div className="mt-3">
            <label for="password" className="block text-base mb-2 font-bold">
              Confirm New Password
            </label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password"
                className="form-control"
                placeholder="Confirm New Password"
                value={confirmpassword}
                onChange={handleConfirmPasswordChange}
              />
              <button
                type="button"
                className="btn btn-outline-primary indigo"
                onClick={toggleConfirmPasswordVisibility}
              >
                <i> {showConfirmPassword ? "Hide" : "Show"}</i>
              </button>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="">
              <Link
                to="/"
                href=""
                className="text-indigo-800 font-semibold no-underline "
              >
                Already have an account?
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              class="border-2 border-indigo-800 bg-indigo-700 text-white py-1 w-full rounded-md hover:text-black font-semibold hover:bg-indigo-900 "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
