import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './workerstyle.css';
// import AdminNavi from "../Navipages/adminNavi";
// import "../styles/styles.css";
import Navbar from "../../navpages/adminnav";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function WorkerData() {
  const navigate = useNavigate();
  // const [records, setRecords] = useState([]);
  // const [columns, setColumns] = useState([]);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addworker", {
        email,
        name,
        phone,
        type,
      })
      .then((result) => {
        console.log(result);
        navigate("/worker_data");
        setEmail("");
        setName("");
        setPhone("");
        setType("");
        handleClose();
        alert("Worker Added");
      })
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/getuserdata")
  //     .then((res) => {
  //       setColumns(Object.keys(res.data[0]));
  //       setRecords(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Navbar />
      <h1 className="workerdata">Worker Data</h1>
      <div className="container mt-5">
        <div className="text-end">
          <Link
            to=""
            className="btn btn-primary userdatastyle"
            onClick={handleShow}
          >
            Add Worker
          </Link>
        </div>

        <form className="container">
          <div className="row">
            <div class="form-group col-md-3 mt-3 mb-3">
              <select id="inputState" class="form-control">
                <option selected>Search By</option>
                <option value="type">Type</option>
                <option value="email">Email</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div class="form-group col-md-9 mt-3 mb-3">
              <input
                type="searching"
                class="form-control"
                id="searching"
                placeholder="Enter Value"
              />
            </div>
          </div>
        </form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Worker</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit>
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
                </div>
              </div>
              <div className="mt-3">
                <label for="mail" className="block text-base mb-2 font-bold ">
                  Name
                </label>

                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Worker Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label for="mail" className="block text-base mb-2 font-bold ">
                  Type of Worker
                </label>

                <div className="input-group">
                  <Form.Select
                    aria-label="Select the Worker type"
                    value={type}
                    onChange={handleTypeChange}
                  >
                    <option>Select the Worker type</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="plumber">Plumber</option>
                    <option value="electrician">Electrical</option>
                    <option value="civil">Civil</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </div>
              </div>

              <div className="mt-3">
                <label for="phone" className="block text-base mb-2 font-bold">
                  Phone Number
                </label>
                <div className="input-group">
                  <input
                    // type={showpassword ? "text" : "password"}
                    name="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  {/* <button
                type="button"
                className="btn btn-outline-primary indigo"
                
              >
                <i> {showpassword ? "Hide" : "Show"}</i>
              </button> */}
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Type</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {records.map((d, i) => (
              <tr key={i._id}>
                <td>{d.email}</td>
                <td>{d.type}</td>
                <td>{d.password}</td>
                <td>
                  <Link
                    to="/updateuser"
                    className="btn btn-sm btn-success mb-1"
                  >
                    Update
                  </Link>
                  <Link
                    to="/deleteuser"
                    className="btn btn-sm btn-danger ml-1 mb-1"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WorkerData;
