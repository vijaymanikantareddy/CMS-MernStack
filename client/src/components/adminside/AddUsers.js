import axios from "axios";
import React, { useState } from "react";
import "../styles/registyle.css";
import AdminNavi from "../Navipages/adminNavi";
import "../styles/registyle.css";

function AddUsers() {
  const [inputData, setInputData] = useState({
    email: "",
    type: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", {email, password, type})
      .then((res) => {
        console.log(email);
        console.log(type);
        console.log(password);
        alert("Data Added Successfully");
      })
      .catch((err) => console.log("Error in Adding"));
  }

  return (
    <>
      <AdminNavi />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 border-2 rounded bg-light p-5 mt-5 mb-5">
            <div className="">
              <h1 className="text-center text-indigo-700">Add User</h1>
              <hr />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">Email: </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={email}
                    onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password: </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary indigo"
                    onClick={togglePasswordVisibility}
                  >
                    <i> {showPassword ? "Hide" : "Show"}</i>
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="type">Type: </label>
                <select
                  name="type"
                  className="form-control"
                  value={type}
                    onChange={handleTypeChange}
                  
                > <option selected>Select Access</option>
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </div>
              <br />
              <button type="submit" className="btn btn-secondary indigo">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUsers;
