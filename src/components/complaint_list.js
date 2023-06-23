import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import axios from 'axios';


function Complaint_List(){
  let [data,setData]=useState([]);
    
    useEffect(()=>{
      axios.get('http://localhost:1260/complaint_form').then((res)=>{
        setData(res.data)
      })
    },[])
  return (
    <> 
    <div className='row'> 
      <div className='col-md-3'><Navbar/></div>
      <div className='col-md-9'>
        <h1 className='heading-data'>Complaint Data</h1>
        {/* <Table /> */}
        <div className='div_table'>
        <table border={'2'}>
          <tr>
            <th>S. No</th>
            <th>Location</th>
            <th>Date</th>
            <th>Complaint Type</th>
            <th>Work Priority</th>
            <th>Complaint Description</th>
            <th>Job Code</th>
            <th>Resolved</th>
            <th>Status</th>
            
          </tr>
          <t>
            {data.map((ele,index)=>{
              return (<tr>
                <td>{ele.college}</td>
                <td>{ele.building}</td>
                <td>{ele.location}</td>
                <td>{ele.date}</td>
                <td>{ele.work}</td>
                <td>{ele.priority}</td>
                <td>{ele.description}</td>
                <td>{ele.remarks}</td>
                </tr>)
            })}
          </t>
        </table>
        </div>


      </div>
    </div>
        </>
    )
}
export default Complaint_List