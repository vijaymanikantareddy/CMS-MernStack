import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './complaint.css';
import UserNavbar from './usernavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import RegistrationForm from './registration-form';
import React,{useState} from 'react';
// import axios from 'axios';

function userComplaint_Form() {

//   const [id,setId] = useState("");
//   const [college,setCollege] = useState("");
//   const [building,setBuilding] = useState("");
//   const [location,setLocation] = useState("");
//   const [date,setDate] = useState("");
//   const [work,setWork] = useState("");
//   const [priority,setPriority] = useState("");
//   const [description,setDescription] = useState("");
//   const [remark,setRemark] = useState("");

//   const handleSubmit = (e) => {
//     const person = {id,college,building,location,date,work,priority,description,remark}
//     e.preventDefault()
//     axios.post('localhost:1260/complaint_form', person).then((res)=>{
//         console.log(res);
//     })
// }


  return (
    <>

    <div className='row'>
      <div className='col-md-3'>
        <UserNavbar/>
      </div>
      
      <div className='col-md-9 outside' style={{}}>
        <div className='form_here'>
              {/* <RegistrationForm/> */}
              <h1 style={{color:'black'}}>Complaint Form</h1>
              <br></br>
      <form>
        
        <br></br>
        <div className="input-wrapper">
          
          <select style={{border:'1px solid black', height:'50px'}} name="cars" id="cars"  >
            <option>Select the the college</option>
            <option value="volvo">Aditya Engineering College</option>
            <option value="saab">Aditya College of Engineering and Technology</option>
            <option value="mercedes">Aditya College of Engineering</option>
          </select>
          
          
          <select style={{border:'1px solid black', width:'350px',  height:'50px'}} name="cars" id="cars" >
            <option value="volvo">Select the Building Name</option>
            <option value="volvo">Incubation Center</option>
            <option value="saab">visweswara Bhavan</option>
            <option value="saab">Billgates Bhavan</option>
            <option value="saab">Cotton bhavan</option>
            <option value="saab">Abdul kalam Bhavan</option>
            <option value="saab">C V Raman Bhavan</option>
            <option value="saab">Einstein Bhavan</option>
          </select>
        </div>
        <br></br>

        <div className="input-wrapper">
          <input style={{border:'1px solid black', width:'350px'}} type="text" placeholder="Location"   />
          <input style={{width:'350px'}} type="date"    placeholder=""   />
        </div>
        <br></br>

        <div className="input-wrapper" >
        <select className='data' style={{border:'1px solid black', width:'350px', height:'50px'}} name="cars" id="cars"  >
            <option value="volvo">Complaint Type</option>
            <option value="volvo">Electrical</option>
            <option value="saab">Carpenter</option>
            <option value="saab">Plumbing</option>
            <option value="saab">Civil</option>
            <option value="saab">Paint</option>
            <option value="saab">Other</option>
          </select>
          
        {/* <div className="input-wrapper" > */}
            <select style={{border:'1px solid black', width:'350px'}} name="cars" id="cars" >
            <option value="volvo">Work Priority</option>
            <option value="volvo">High</option>
          
            <option value="saab">Medium</option>
            <option value="saab">Low</option>
          </select>
        {/* </div> */}
        </div>
        <br></br>

        {/* <div className="input-wrapper" > */}
        <div className="input-wrapper" >
          <input style={{border:'1px solid black', width:'720px'}} type="text" placeholder="Complete Description" />
          
        </div>
        <br></br>
        {/* <div className="input-wrapper" > */}
        <div className="input-wrapper" >
          <input style={{border:'1px solid black', width:'720px'}} type="text" placeholder="Remarks" />
          
        </div>

        <button type="submit">Submit</button>
        {/* </div>
        </div> */}
      </form>
        <div>
          
    </div>
    </div>
      
    </div>
      
    </div>
    </>
  );
}

export default userComplaint_Form;

