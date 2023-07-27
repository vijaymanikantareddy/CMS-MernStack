import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/registyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavi from "../Navipages/adminNavi";

function AllComplaints() {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);

  const [search, setSearch] = useState("");
  const [searchval, setSearchval] = useState("");

  const handleSearchvalChange = (e) => {
    console.log(searchval);
    setSearchval(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    // const confirm = window.confirm('Do you want to Delete?');
    // if(confirm){
    //   fetch('http://localhost:5000/deletecomplaint',{
    //     method: "POST",
    //     crossDomain: true,
    //     headers:{
    //       "Content-Type":"application/json",
    //       Accept: "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body:JSON.stringify({
    //       userid: id,
    //     })
    //   })
    //   .then(res =>{
    //     alert("Complaint Deleted")
    //   })
    // }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/allcomplaints")
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <AdminNavi/>
      <div className="container mt-1">
        <h1 className="text-center text-indigo-700 mt-3">All Complaints</h1>
        <hr />
        <form className="container">
          <div className="row">
            <div class="form-group col-md-3 mt-3 mb-3">
              <select
                id="inputState"
                class="form-control"
                value={searchval}
                onChange={handleSearchvalChange}
              >
                <option selected>Search By</option>
                <option value="college">college</option>
                <option value="email">email</option>
                <option value="building">building</option>
                <option value="date">date</option>
                <option value="type">type</option>
                <option value="status">status</option>
              </select>
            </div>

            <div class="form-group col-md-9 mt-3 mb-3">
              <input
                type="searching"
                class="form-control"
                id="searching"
                placeholder="Enter Complaint"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </form>

        <table className="table table-bordered mt-3">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th>Email</th>
              <th>College</th>
              <th>Building</th>
              <th>Location</th>
              <th>Date</th>
              <th>Floor</th>
              <th>Type</th>
              <th>Description</th>
              <th>Remark</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {records
              .filter((item) => {
                const searchLowerCase = search.toLowerCase();
                const itemTypeLowerCase = (item[searchval] || "").toLowerCase();
                return (
                  searchLowerCase === "" ||
                  itemTypeLowerCase.includes(searchLowerCase)
                );
              })
              .map((d, i) => (
                <tr key={i._id}>
                  <td>{d.email}</td>
                  <td>{d.college}</td>
                  <td>{d.building}</td>
                  <td>{d.location}</td>
                  <td>{d.date}</td>
                  <td>{d.floor}</td>
                  <td>{d.type}</td>
                  <td>{d.comdes}</td>
                  <td>{d.remark}</td>
                  <td>{d.status}</td>
                  <td>
                    <Link
                      to={`/updatecompli/${i._id}`}
                      className="btn btn-sm btn-success mb-1"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-sm btn-danger ml-1 mb-1"
                      onClick={handleDelete(i._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllComplaints;
