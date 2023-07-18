import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import UserNavbar from './usernavbar';


function UserComplaint_List(){
  return (
    <> 
    <div className='row'> 
      <div className='col-md-3'><UserNavbar/></div>
      <div className='col-md-9'>
        <h1 className='heading-data'>Complaint Data</h1>
        {/* <Table /> */}
        <div className='div_table'>
        <table border={'2'}>
          <tr>
            <th>S. No</th>
            <th>College name</th>
            <th>Building name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Complaint Type</th>
            <th>Work Priority</th>
            <th>Complaint Description</th>
            <th>Job Code</th>
            <th>Resolved</th>
            <th>Status</th>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>NA</td>
            <td>The totanaijfn ahoi</td>
            <td>High</td>
            
            <td>1205605254</td>
            <td>Completed</td>
            
          </tr>
        </table>
        </div>


      </div>
    </div>
        </>
    )
}
export default UserComplaint_List