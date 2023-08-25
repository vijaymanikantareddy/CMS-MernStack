import logo from './logo.svg';
import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/startingpages/home';
import Navbar from './components/navpages/adminnav';
import Login from './components/startingpages/login';
import Register from './components/startingpages/register';
import Complaintform_admin from './components/adminside/complaintform';
import All_complaints from './components/adminside/all_complaints';
import Pending_complaints from './components/adminside/pending_complaints';
import User_Data from './components/adminside/user_data';
import Worker_Data from "./components/adminside/worker_data";
import User_all_complaints from './components/userside/user_all_complaints';
import User_complaint_form from './components/userside/user_complaint_form';
import User_Navbar from './components/navpages/usernav';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/Complaintform_admin" element={<Complaintform_admin/>}/>
        <Route path="/pending_complaints" element={<Pending_complaints/>}/>
        <Route path="/all_complaints" element={<All_complaints/>}/>
        <Route path="/user_data" element={<User_Data/>}/>
        <Route path="/worker_data" element={<Worker_Data/>}/>
        <Route path="/user_complaint_form" element={<User_complaint_form/>}/>
        <Route path="/user_all_complaints" element={<User_all_complaints/>}/>
        
      </Routes>

      
      
     
    </div>
  );
}

export default App;
