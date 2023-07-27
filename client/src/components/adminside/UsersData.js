import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/registyle.css";
import AdminNavi from "../Navipages/adminNavi";

function UsersData() {
  const [records, setRecords] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getuserdata")
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <><AdminNavi/>
      <div className="container mt-5">
        <div className="text-end">
          <Link to="/admin/createuser" className="btn btn-primary userdatastyle">
            Add User
          </Link>
        </div>
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
            {records.map((d, i) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UsersData;
