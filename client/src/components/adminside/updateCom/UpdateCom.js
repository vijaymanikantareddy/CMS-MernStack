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
import "./updateCom.css";

function UpdateCom() {
  const { id } = useParams();
  const [college, setCollege] = useState("");
  const [building, setBuilding] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [comdes, setComdes] = useState("");
  const [remark, setRemark] = useState("");
  const [room, setRoom] = useState("");
  const [floor, setFloor] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [worker, setWorker] = useState("");
  const [workerOptions, setWorkerOptions] = useState([]);
  const [allWorkers, setAllWorkers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllWorkers")
      .then((result) => {
        setAllWorkers(result.data.workers);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (type) {
      const lowercaseType = type.toLowerCase();
      const filteredWorkers = allWorkers.filter((worker) => {
        return worker.type.toLowerCase() === lowercaseType;
      });
      setWorkerOptions(filteredWorkers);
    }
  }, [type, allWorkers]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getComplaint/${id}`)
      .then((result) => {
        console.log(result);
        setDate(result.data.date);
        setRoom(result.data.room);
        setType(result.data.type);
        setRemark(result.data.remark);
        setFloor(result.data.floor);
        setCollege(result.data.college);
        setBuilding(result.data.building);
        setComdes(result.data.comdes);
        setEmail(result.data.email);
        setStatus(result.data.status);
        setWorker(result.data.worker);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (type) {
      axios
        .get(`http://localhost:5000/getWorkers/${type}`)
        .then((result) => {
          setWorkerOptions(result.data.workers);
        })
        .catch((err) => console.log(err));
    }
  }, [type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/updateCom/${id}`, {
        email,
        date,
        remark,
        type,
        college,
        building,
        floor,
        room,
        comdes,
        status,
        worker,
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
          <header>Update Complaint</header>
          <hr />
          <form className="form">
            <div className="column">
              <div className="input-box">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  readOnly
                />
              </div>
              <div className="input-box">
                <label>College</label>
                <input
                  type="text"
                  readOnly
                  placeholder="Enter College"
                  value={college}
                />
              </div>
            </div>

            <div className="column">
              <div className="input-box">
                <label>Building</label>
                <input
                  type="text"
                  placeholder="Enter Building"
                  value={building}
                  readOnly
                />
              </div>
              <div className="input-box">
                <label>Room</label>
                <input
                  type="text"
                  placeholder="Enter Room"
                  readOnly
                  value={room}
                />
              </div>
            </div>

            <div className="column">
              <div className="input-box">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  readOnly
                  value={comdes}
                />
              </div>
              <div className="input-box">
                <label>Status</label>
                <div className="select-box">
                  <select
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option hidden>Select</option>
                    <option value="pending">Pending</option>
                    <option value="Worker Assigned">Worker Assigned</option>
                    <option value="Completed"> Completed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <label>Type</label>
                <input
                  type="text"
                  placeholder="Enter Type"
                  value={type}
                  readOnly
                />
              </div>
              <div className="input-box">
                <label>Worker</label>
                <div className="select-box">
                  <select
                    value={worker}
                    onChange={(e) => setWorker(e.target.value)}
                  >
                    <option hidden>Select</option>
                    {workerOptions.map((worker) => (
                      <option key={worker._id} value={worker.name}>
                        {worker.name}
                      </option>
                    ))}
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

export default UpdateCom;
