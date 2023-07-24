import React, {useState} from "react";

import "./login.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState('');
  const [showpassword, setShowpassword] = useState('');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    setShowpassword(e.target.checked);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/register', {email, password, type:"user"})
    .then(result => {console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  const handleOTPRequest = () =>{
    axios.post('api/request-otp', {email})
    .then((response) =>{
      console.log('OTP Requested Successfully: ', response.data);
    })
    .catch((error) =>{
      console.error('Error requesting OTP: ', error);
    })
  }

  const changetologin=()=>{
      window.history.pushState({}, '', '/');
  }
  return (
<div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96  p-6 bg-gray-100 shadow-lg rounded-md">
        <h1 className="text-3xl block text-center font-semibold">Register</h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label for="mail" className="block text-base mb-2 font-bold ">
            Email
          </label>
          <input
            type="text"
            className="border w-75 mr-2 text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email" value={email} onChange={handleEmailChange}
          />
          <button type="submit" class="mt-2 justify-center items-center border-2 border-indigo-800 bg-indigo-700 text-white py-1 w-35 rounded-md hover:text-black font-semibold hover:bg-indigo-900 " onClick={handleOTPRequest}>Send OTP</button>
        </div>
        <div className="mt-3">
          <label for="otp" className="block text-base mb-2 font-bold">
            OTP
          </label>
          <input
            type="text"
            className="border w-75 mr-2 text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter OTP"
          />
          <button type="submit" class="mt-2 justify-center items-center border-2 border-indigo-800 bg-indigo-700 text-white px-2 py-1 w-55 rounded-md hover:text-black font-semibold hover:bg-indigo-900 ">Verify</button>
        </div>
        <div className="mt-3">
          <label for="password" className="block text-base mb-2 font-bold">
            New Password
          </label>
          <input
            type='password' id="password"
            className="border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter New Password"
          />
        </div>
        <div className="mt-3">
          <label for="password" className="block text-base mb-2 font-bold">
           Confirm Password
          </label>
          <input
           type={showpassword? 'text': 'password'} id="password" value={password} onChange={handlePasswordChange}
            className="border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password"
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="">
          <input type="checkbox" checked={showpassword} onChange={handleCheckboxChange}/>
            <label> {showpassword? ' Hide Password' : ' Show Password'}</label>
          </div>
          <div className="">
            <Link to="/" href="" className="text-indigo-800 font-semibold no-underline ">
              Already have an account?
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" class="border-2 border-indigo-800 bg-indigo-700 text-white py-1 w-full rounded-md hover:text-black font-semibold hover:bg-indigo-900 ">
            Register
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Register;