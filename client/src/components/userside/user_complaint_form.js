import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import User_Navbar from '../navpages/usernav'
import "../styles/styles.css";

function user_complaint_form ({}) {
    
  return (
    <div><User_Navbar/>
        <div className='border-4 border-indigo-500 rounded-md mb-4 mt-5 md:ml-16 md:mr-16 sm:ml-4 sm:mr-3'>
        <h1 className='text-center text-indigo-700 mt-3'>Raise a Complaint</h1>
        <hr/>
    <form className='container' >
  <div class="form row mt-4">

  <div class="form-group col-md-6 mt-3 mb-3">
      <select id="inputState" class="form-control"  >
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
      <select id="inputState" class="form-control"  >
        <option selected>Select Building</option>
        <option>Viswesaraya Bhavan</option>
        <option>Cotton Bhavan</option>
        <option>APJ Abdul Kalam Bhavan</option>
        <option>Bill Gates Bhavan</option>
      </select>
    </div>

    <div class="form-group col-md-6 mt-3 mb-3">
      <select id="inputState" class="form-control"  >
        <option selected>Complaint Type</option>
        <option>Electrical</option>
        <option>Plumbing</option>
        <option>Carpentar</option>
        <option>Painting</option>
        <option>Civil</option>
      </select>
    </div>

    <div class="form-group col-md-6 mt-3 mb-3">
      <input type="location" class="form-control" id="location" placeholder="Enter Location" />
    </div>

    <div class="form-group col-md-6 mt-3 mb-3">
      <input type="roomnum" class="form-control" id="inputPassword4" placeholder="Enter Room" />
    </div>

    <div class="form-group col-md-6 mt-3 mb-3">
      <input type="floornum" class="form-control" id="inputPassword4" placeholder="Enter Floor"  />
    </div>

    <div class="form-group mt-3 mb-3">
    <label for="exampleFormControlTextarea1">Complete Description</label>
    <textarea class="form-control mb-2 mt-2" id="exampleFormControlTextarea1" rows="3"  ></textarea>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlTextarea1">Remarks</label>
    <textarea class="form-control mb-3 mt-2" id="exampleFormControlTextarea1" rows="3" ></textarea>
  </div>
  </div>
  <div className='d-flex justify-content-center align-items-center mb-5'>
  <button type="submit" class="btn btn-secondary indigo align-items-center">Submit</button>
  </div>
</form>
    </div>
    </div>
  )
}

export default user_complaint_form;

