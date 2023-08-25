import axios from "axios";
import React, { useState, Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
// import "../styles/registyle.css";
// import AdminNavi from "../Navipages/adminNavi";
import "../styles/styles.css";
import Navbar from "../navpages/adminnav";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function UserData() {
  // const [records, setRecords] = useState([]);
  // const [columns, setColumns] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/getuserdata")
  //     .then((res) => {
  //       setColumns(Object.keys(res.data[0]));
  //       setRecords(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = (e) => {
    setShowpassword(!showpassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        email,
        type,
        password
      })
      .then((result) => {
        console.log(result);
        navigate("/worker_data");
        setEmail("");
        setType("");
        setPassword("");
        handleClose();
        alert("User Added");
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-end">
          <Link
            to=""
            className="btn btn-primary userdatastyle"
            onClick={handleShow}
          >
            Add User
          </Link>
        </div>
        <form className="container">
          <div className="row">
            <div class="form-group col-md-3 mt-3 mb-3">
              <select id="inputState" class="form-control">
                <option selected>Search By</option>
                <option value="type">Type</option>
                <option value="email">Email</option>
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
            <Modal.Title>Adding User</Modal.Title>
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
                  />
                </div>
              </div>
              <div className="mt-3">
                <label for="mail" className="block text-base mb-2 font-bold ">
                  Type of user
                </label>

                <div className="input-group">
                  <Form.Select aria-label="Select the User type">
                    <option>Select the User type</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </Form.Select>
                </div>
              </div>

              <div className="mt-3">
                <label
                  for="password"
                  className="block text-base mb-2 font-bold"
                >
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showpassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Enter New Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary indigo"
                    onClick={togglePasswordVisibility}
                  >
                    <i> {showpassword ? "Hide" : "Show"}</i>
                  </button>
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
              <th>Type</th>
              <th>Password</th>
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

export default UserData;
