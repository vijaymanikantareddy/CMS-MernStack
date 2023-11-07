import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import InputGroup from "react-bootstrap/InputGroup";
import "./updateworker.css";

function CreateUser() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [gender, setGender] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/addUser/`, {
        email,
        fullname,
        phone,
        type: "user",
        password: "user@123",
        college,
        branch,
        gender,
        rollnumber,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mainbody">
        <section className="container">
          <header>Add User</header>
          <hr />
          <form className="form">
            <div className="column">
              <div className="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label>Roll Number</label>
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  value={rollnumber}
                  onChange={(e) => setRollnumber(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>College</label>
                <div className="select-box">
                  <select
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  >
                    <option hidden>Select</option>
                    <option>ACET</option>
                    <option>ACOE</option>
                    <option>AEC</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Branch</label>
                <div className="select-box">
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  >
                    <option hidden>Select</option>
                    <option>IT</option>
                    <option>CSE</option>
                    <option>EEE</option>
                    <option>ECE</option>
                    <option>MECH</option>
                    <option>Civil</option>
                  </select>
                </div>
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
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label for="check-male">Male</label>
                </div>
                <div className="gender">
                  <input
                    type="radio"
                    id="check-female"
                    value="female"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
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
    </div>
  );
}

export default CreateUser;
