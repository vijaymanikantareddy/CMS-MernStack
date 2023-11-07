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

function UpdateWorker() {
  const { id } = useParams();

  const [name, setName] = useState([]);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getWorker/${id}`)
      .then((result) => {
        console.log(result);
        setType(result.data.type);
        setEmail(result.data.email);
        setName(result.data.name);
        setPhone(result.data.phone);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/updateWorker/${id}`, {
        email,
        name,
        phone,
        type,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mainbody">
        <section className="container">
          <header>Update Worker</header>
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
              Update
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default UpdateWorker;
