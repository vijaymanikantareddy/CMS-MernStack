import logo from "./logo.svg";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Navibar from "./components/navbar/Navbar";
import Home from "./components/startingpages/home";
import Navbar from "./components/navpages/adminnav";
import Login from "./components/startingpages/login";
import Register from "./components/register/register";
import Complaintform_admin from "./components/adminside/complaintform";
import All_complaints from "./components/allComplaints/Mycomplaints";
import Pending_complaints from "./components/adminside/pending_complaints";
import User_Data from "./components/adminside/user_data";
import Worker_Data from "./components/adminside/workerData/worker_data";
import User_all_complaints from "./components/userside/user_all_complaints";
import User_complaint_form from "./components/userside/user_complaint_form";
import User_Navbar from "./components/navpages/usernav";
import Homepage from "./components/homepage/Home";
import AllComplaints from "./components/allComplaints/all_complaints";
import Mycomplaints from "./components/allComplaints/Mycomplaints";
import UpdateCom from "./components/adminside/updateCom/UpdateCom";
import WorkerData from "./components/adminside/workerData/worker_data";
import UpdateWorker from "./components/adminside/worker/UpdateWorker";
import CreateWorker from "./components/adminside/worker/CreateWorker";
import ViewWorkers from "./components/adminside/worker/ViewWorkers";
import CreateUser from "./components/adminside/usercrud/CreateUser";
import UpdateUser from "./components/adminside/usercrud/UpdateUser";
import ViewUsers from "./components/adminside/usercrud/ViewUsers";
import ComplaintFormAd from "./components/adminside/complaintform";
import UserComplaintform from "./components/complaintforms/UserComplaintform";
import AdminComplaintform from "./components/complaintforms/AdminComplaintform";
import AdminNavbar from "./components/navigationbars/AdminNavbar";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdata" element={<ViewUsers />} />
        <Route path="/allcomplaints" element={<AllComplaints />} />
        <Route path="/workerdata" element={<ViewWorkers />} />
        <Route path="/adduser" element={<CreateUser />} />
        <Route path="/addworker" element={<CreateWorker />} />
        <Route path="/updateCom/:id" element={<UpdateCom />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
        <Route path="/updateWorker/:id" element={<UpdateWorker />} />
        <Route path="/usercomplaintform" element={<UserComplaintform />} />
        <Route path="/admincomplaintform" element={<AdminComplaintform />} />
        <Route path="/usercomplaints" element={<Mycomplaints />} />
      </Routes>
      {/* <AdminNavbar/> */}
      {/* <User_Navbar/> */}
      {/* <Homepage/> */}
      {/* <Navbar/> */}
      {/* <Complaintform_admin/> */}
      {/* <AllComplaints />
      <Routes>
        <Route path="/updateCom/:id" element={<UpdateCom />} />
        <Route path="/updateUser/:id" element={<UpdateUser/>} />
        <Route path="/updateWorker/:id" element={<UpdateWorker/>} />
      </Routes> */}
      {/* <ViewWorkers/> */}
      {/* <ViewUsers/> */}
      {/* <UpdateCom/> */}
      {/* <User_Navbar/> */}
    </div>
  );
}

export default App;
