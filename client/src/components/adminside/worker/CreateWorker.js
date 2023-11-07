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
import AdminNavbar from "../../navigationbars/AdminNavbar";

function CreateWorker() {
  const { id } = useParams();

  const [name, setName] = useState([]);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/addWorker/`, {
        email,
        name,
        phone,
        type,
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
      <AdminNavbar />
      <div className="mainbody">
        <section className="container">
          <header>Add Worker</header>
          <hr />
          <form className="form">
            <div className="column">
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <label>Worker Type</label>
                <div className="select-box">
                  <select
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option hidden>Select</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Carpenter"> Carpenter</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="submitbutton" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default CreateWorker;
