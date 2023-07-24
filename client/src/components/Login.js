import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "../components/dashboard";
// import './login.css';
// import UserNavbar from "./usernavbar";
import UserDashBoard from "./userdashboard";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState('');
  const [showpassword, setShowpassword] = useState('');
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    setShowpassword(e.target.checked);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data == "successuser"){
        navigate('/userdashboard')
      }else if(result.data == "successadmin"){
        navigate('/dashboard')
      }
    })
    .catch(err => console.log(err))
  }
  
  // const handleSearchCLick = () => {
  //   if (username == "sriram" && password == "mb") {
  //     // history.push('/dash')
  //     // navigate('/components/Dashboard');
  //     // alert('Hello Sriram');
  //     window.history.pushState({}, "", "/dashboard");
  //     window.location.reload();
  //     // window.location.href = '/dash';
  //     // window.history.pushState({ username: 'sriram', password: 'mb' }, '', '/dash');
  //   } else if (username == "satwika" && password == "satwika") {
  //     // navigate('/userdash');
  //     // history.push('/userdash')
  //     alert("Hello Satwika");
  //     window.history.pushState({}, "", "/dashboard");
  //   } else if (username == "vijay" && password == "user") {
  //     // navigate('/userdash');
  //     // history.push('/userdash')
  //     alert("Hello vijay");
  //     window.history.pushState({}, "", "/userdashboard");
  //   } else if (username == "neeraja" && password == "neeraja") {
  //     // navigate('/userdash');
  //     // history.push('/userdash')
  //     alert("Hello neeraja");
  //     window.history.pushState({}, "", "/userdashboard");
  //   }
  // };
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className="w-96  p-6 bg-gray-100 shadow-2xl rounded-md">
        <h1 className="text-3xl block text-center font-semibold">Login</h1>
        <hr className="mt-3" />
        <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label for="email" className="block text-base mb-2">
            Email
          </label>
          <input
            type="text"
            className="border w-full text-base px-3 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email" onChange={handleEmailChange}
          />
        </div>
        <div className="mt-3">
          <label for="password" className="block text-base mb-2">
            Password
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
            <label> {showpassword? ' Hide' : ' Show'}</label>
          </div>
          <div className="">
            <Link to="/register" href="" className="text-indigo-800 font-semibold no-underline ">
              New User? or Forgot Password?
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" class="border-2 border-indigo-800 bg-indigo-700 text-white py-1 w-full rounded-md hover:text-black font-semibold hover:bg-indigo-900 ">
            Login
          </button>
        </div>
        </form>
      </div>
      {/* <div className="flex flex-column absolute inset-x-0 bottom-0 h-15 justify-center items-center bg-gray-800">
        <h1 className="text-white text-sm">&copy; Vijay Manikanta Reddy Sathi</h1>
      </div> */}
    </div>
  );
}
export default Login;
