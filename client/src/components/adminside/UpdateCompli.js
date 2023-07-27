import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/registyle.css";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavi from "../Navipages/adminNavi";

function UpdateCompli({}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    type: "",
    college: "",
    building: "",
    location: "",
    remark: "",
    status: "",
    floor: "",
    room: "",
    date: "",
    comdes: "",
  });

  useEffect(() => {}, []);

  const [worker, setWorker] = useState("");

  const handleWorkerChange = (e) => {
    setWorker(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/updatecomplaint/", inputData)
      .then((res) => {
        alert("Data Updated Successfully");
      })
      .catch((err) => console.log("Error in Adding"));
  }

  return (
    <><AdminNavi/>
    <div className="container">
      <div className="border-4 border-indigo-500 rounded-md mb-4 mt-5 md:ml-16 md:mr-16 sm:ml-4 sm:mr-3">
        <h1 className="text-center text-indigo-700 mt-3">Update Complaint</h1>
        <hr />
        <form className="container" onSubmit={handleSubmit}>
          <div class="form row mt-4">
            <div class="form-group col-md-6 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                disabled
                value={inputData.college}
                onChange={(e) =>
                  setInputData({ ...inputData, college: e.target.value })
                }
              >
                <option selected>Select College</option>
                <option>Aditya Engineering College</option>
                <option>Aditya College of Engineering and Technology</option>
                <option>Aditya College of Engineering</option>
                <option>Technical Hub</option>
                <option>Aditya Global Business School</option>
                <option>Aditya Pharmacy College</option>
              </select>
            </div>
            <div class="form-group col-md-6 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                disabled
                value={inputData.building}
                onChange={(e) =>
                  setInputData({ ...inputData, building: e.target.value })
                }
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
                disabled
                value={inputData.type}
                onChange={(e) =>
                  setInputData({ ...inputData, type: e.target.value })
                }
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
                type="text"
                class="form-control"
                id="worker"
                placeholder="Assign worker"
                value={inputData.location}
                onChange={(e) =>
                  setInputData({ ...inputData, location: e.target.value })
                }
              />
            </div>

            <div class="form-group col-md-6 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                value={worker}
                onChange={handleWorkerChange}
              >
                <option selected>Status</option>
                <option>pending</option>
                <option>workerassigned</option>
                <option>completed</option>
              </select>
            </div>

            <div class="form-group mt-3 mb-3">
              <label for="exampleFormControlTextarea1">
                Complete Description
              </label>
              <textarea
                class="form-control mb-2 mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                disabled
                value={inputData.comdes}
                onChange={(e) =>
                  setInputData({ ...inputData, comdes: e.target.value })
                }
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Remarks</label>
              <textarea
                class="form-control mb-3 mt-2"
                id="exampleFormControlTextarea1"
                rows="3"
                disabled
                value={inputData.remark}
                onChange={(e) =>
                  setInputData({ ...inputData, remark: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-5">
            <button
              type="submit"
              class="btn btn-secondary indigo align-items-center"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div></>
  );
}

export default UpdateCompli;
