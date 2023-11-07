import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../navpages/adminnav";
import "../styles/styles.css";

function ComplaintFormAd(props) {
  const [college, setCollege] = useState("");
  const [building, setBuilding] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [comdes, setComdes] = useState("");
  const [remark, setRemark] = useState("");
  const [room, setRoom] = useState("");
  const [floor, setFloor] = useState("");
  const navigate = useNavigate();

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };
  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };
  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
  };

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };
  const handleBuildingChange = (e) => {
    setBuilding(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleComdesChange = (e) => {
    setComdes(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    setDate(date.toLocaleString());
    axios
      .post("http://localhost:5000/registercom", {
        email: props.email,
        college,
        building,
        date,
        type,
        comdes,
        remark,
        status: "pending",
        room,
        floor,
      })
      .then((result) => {
        console.log(result);
        navigate("/user_complaint_form");
        alert("Complaint Registered");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="admincfbg">
      <div className="complaintformadmin md:mb-4 sm:ml-4 sm:mr-3">
        <h1 className="text-center text-blue-900 mt-3 mb-4">
          Raise a Complaint
        </h1>
        {/* <hr /> */}
        <form className="container">
          <div class="form row mt-4">
            <div class="form-group col-md-6 mt-3 mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                value={props.email}
                readOnly={true}
              />
            </div>
            <div class="form-group col-md-6 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                value={college}
                onChange={handleCollegeChange}
              >
                <option selected>Select College</option>
                <option>Aditya Engineering College</option>
                <option>Aditya College of Engineering and Technology</option>
                <option>Aditya College of Engineering</option>
              </select>
            </div>
            <div class="form-group col-md-6 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                value={building}
                onChange={handleBuildingChange}
              >
                <option selected>Select Building</option>
                <option>Viswesaraya Bhavan</option>
                <option>Cotton Bhavan</option>
                <option>APJ Abdul Kalam Bhavan</option>
                <option>Bill Gates Bhavan</option>
              </select>
            </div>

            <div class="form-group col-md-6 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                value={type}
                onChange={handleTypeChange}
              >
                <option selected>Complaint Type</option>
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Carpentar</option>
                <option>Painting</option>
                <option>Civil</option>
              </select>
            </div>

            <div class="form-group col-md-6 mt-3 mb-3">
              <input
                type="roomnum"
                class="form-control"
                id="inputPassword4"
                placeholder="Enter Room"
                value={room}
                onChange={handleRoomChange}
              />
            </div>

            <div class="form-group col-md-6 mt-3 mb-3">
              <input
                type="floornum"
                class="form-control"
                id="inputPassword4"
                placeholder="Enter Floor"
                value={floor}
                onChange={handleFloorChange}
              />
            </div>

            <div class="form-group mt-3 mb-3">
              <label for="exampleFormControlTextarea1">
                Complete Description
              </label>
              <textarea
                class="form-control mb-2 mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                value={comdes}
                onChange={handleComdesChange}
              ></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-5">
            <button
              type="submit"
              class="btn btn-secondary indigo align-items-center"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintFormAd;
