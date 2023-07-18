import React from "react";

import "./login.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Link } from "react-router-dom";
import Login from "./Login";

function Register() {
    const changetologin=()=>{
        window.history.pushState({}, '', '/');
    }
  return (
    <div className="row register_page">
      <div className="col-md-6 leftdiv">
        <center>
          {/* <h1>
            <b>Central Management System</b>
          </h1> */}

          <div className="register_head"><b>Registration Form</b></div>

          <div className="register_in">
            <form>
              <div className="imgcontainer"></div>

              <div className="container">
                <label for="email">
                  <b>Email</b>
                </label><br/>

                <input
                  type="email"
                  placeholder="Enter college Id"
                  name="name"

                  required
                />
                <input type="button" className="btn btn-primary" value={"Send OTP"}/> 
<br/>
                <label for="OTP">
                  <b>OTP</b>
                </label>

                <input
                  type="text"
                  placeholder="Enter OTP"
                  name="OTP"
                  required
                />
                <p className="resend" style={{textDecoration: "none", float:"right",marginRight:"15px"}}>
                  {" "}
                  <Link to="/register">Resend</Link>
                </p>
                <label for="psw">
                  <b>Password</b>
                </label>
                
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />

                <label for="conpsw">
                  <b>Confirm Password</b>
                </label>

                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  name="conpsw"
                  required
                />

                <p className="login_register">
                  
                   <Link to="/login">Already Registered? login here</Link>
                </p>

                {/* <Link to='/' style={{textDecoration: 'none'}}> */}
                    <button type="submit" className="btn btn-danger   registerbutton" onClick={changetologin}>Register</button>
                    {/* </Link> */}
              </div>
            </form>
          </div>
        </center>
      </div>

      <div className="col-md-6 rightdiv">
        <h1>Central Management System</h1>
        <div className="para">
        <p className="right-text"><b>
        A central management system (CMS) is a software platform designed to manage and monitor multiple systems, devices, or applications from a centralized location. This type of system is commonly used in large-scale enterprises, organizations, or networks, where there are numerous endpoints, such as servers, workstations, mobile devices, or IoT devices, that need to be monitored, configured, or updated. The CMS provides a unified interface and dashboard to administrators or IT personnel to control and manage the connected devices and systems. This can include features such as inventory management, software deployment, patch management, remote access, security management, and reporting. The CMS can also automate routine tasks, such as backups, updates, and maintenance, to reduce manual effort and improve efficiency..</b>
        </p>
        </div>
      </div>

      {/* </center> */}
    </div>
  );
}

export default Register;