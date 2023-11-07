import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./allComplaintsstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import Navbar from "../navpages/adminnav";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import DataTable from "react-data-table-component";
import UserNavbar from "../navigationbars/UserNavbar";

function Mycomplaints(props) {
  const [searchBy, setSearchBy] = useState("");
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const columns = [
    { name: "College", selector: "college", sortable: true },
    { name: "Building", selector: "building", sortable: true },
    { name: "Date", selector: "date", sortable: true },
    { name: "Floor", selector: "floor", sortable: true },
    { name: "Type", selector: "type", sortable: true },
    { name: "Description", selector: "comdes", sortable: true },
    { name: "Status", selector: "status", sortable: true },
    { name: "Worker", selector: "worker", sortable: true },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/allcomplaints")
      .then((response) => {
        const allComplaints = response.data;
        const filteredComplaints = allComplaints.filter((complaint) => {
          return complaint.email === props.email;
        });
        setRecords(filteredComplaints);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.email]);

  const [records, setRecords] = useState(data);

  const handleFilter = (e) => {
    const searchTerm = searchText.toLowerCase();

    if (searchTerm === "" || searchTerm === undefined) {
      setRecords(data);
    } else {
      const filteredData = data.filter((row) => {
        const fieldToSearch = row[searchBy] ? row[searchBy].toLowerCase() : ""; // Check if the property exists
        return fieldToSearch.includes(searchTerm);
      });

      setRecords(filteredData);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [searchText, searchBy]);

  return (
    <>
      <UserNavbar />
      <div className="">
        <h1 className="allcomplaintshead text-center">My Complaints</h1>
        <hr />
        <form className="alcsearch container-fluid">
          <div className="row">
            <div className="col-md-4">
              <select
                id="searchBy"
                className="form-control"
                value={searchBy}
                placeholder="Search by"
                onChange={(e) => setSearchBy(e.target.value)}
              >
                <option value="">Search By</option>
                <option value="college">College</option>
                <option value="building">Building</option>
                <option value="date">Date</option>
                <option value="type">Type</option>
                <option value="status">Status</option>
              </select>
            </div>

            <div className="form-group col-md-8 md:pt-0 sm:pt-5">
              <input
                type="search"
                className="form-control"
                id="searchText"
                placeholder="Enter Complaint"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </form>

        <DataTable
          className="AllComplaintsTable"
          columns={columns}
          data={records}
          fixedHeader
          pagination
          striped
          customStyles={{
            headCells: {
              style: {
                backgroundColor: "#1d31ca",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px", // Adjust the font size as needed
              },
              hide: "@media (max-width: 768px)", // Hide the header cells in mobile view
              mobileStyle: {
                fontSize: "16px", // Adjust the font size for mobile view
                backgroundColor: "red",
              },
            },
            rows: {
              style: {
                fontSize: "16px", // Adjust the font size as needed
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default Mycomplaints;
