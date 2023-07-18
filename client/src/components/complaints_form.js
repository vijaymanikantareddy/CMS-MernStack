import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './complaint.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import RegistrationForm from './registration-form';
import axios from "axios";

import { useNavigate } from 'react-router-dom';

function Complaint_Form() {

    const[college,setCollege]=useState('');
    const[building,setBuilding]=useState('');
    const[location,setLocation]=useState('');
    const[date,setDate]=useState('');
    const[work,setWork]=useState('');
    const[priority,setPriority]=useState('');
    const[description,setDescription]=useState('');
    const[remarks,setRemarks]=useState('');
    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
      e.preventDefault();
      let complaints = {
        "college": college,
        "building": building,
        "location": location,
        "date": date,
        "work": work,
        "priority": priority,
        "description": description,
        "remarks": remarks
      };
      axios.post("http://localhost:1260/complaint_form", { complaints }).then((res) => {
        console.log(res.data);
      });
      
      navigate("/complaint_form");
    };
  return (
    <>

    <div className='row'>
      <div className='col-md-3'>
        <Navbar/>
      </div>
      
      <div className='col-md-9 outside' style={{}}>
        <div className='form_here'>
              {/* <RegistrationForm/> */}
              <h1 style={{color:'black'}}>Complaint Form</h1>
              <br></br>
              <form onSubmit={handleSubmit}>

              {/* value={username} onChange={(e)=>setUsername(e.target.value)} */}
        
        <br></br>
        <div className="input-wrapper">
          
          <select style={{border:'1px solid black', height:'50px'}} name="cars" id="cars" value={college} onChange={(e)=>setCollege(e.target.value)}>
            <option>Select the the college</option>
            <option value="Aditya Engineering College">Aditya Engineering College</option>
            <option value="Aditya College of Engineering and Technology">Aditya College of Engineering and Technology</option>
            <option value="Aditya College of Engineering">Aditya College of Engineering</option>
          </select>
          
          
          <select style={{border:'1px solid black', width:'350px',  height:'50px'}} name="cars" id="cars" value={building} onChange={(e)=>setBuilding(e.target.value)}>
            <option value="volvo">Select the Building Name</option>
            <option value="Incubation Center">Incubation Center</option>
            <option value="visweswara Bhavan">visweswara Bhavan</option>
            <option value="Billgates Bhavan">Billgates Bhavan</option>
            <option value="Cotton bhavan">Cotton bhavan</option>
            <option value="Abdul kalam Bhavan">Abdul kalam Bhavan</option>
            <option value="C V Raman Bhavan">C V Raman Bhavan</option>
            <option value="Einstein Bhavan">Einstein Bhavan</option>
          </select>
        </div>
        <br></br>

        <div className="input-wrapper">
          <input style={{border:'1px solid black', width:'350px'}} type="text" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
          <input style={{width:'350px'}} type="date"    placeholder="Address line 2" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <br></br>

        <div className="input-wrapper">
        <select className='data' style={{border:'1px solid black', width:'350px', height:'50px'}} name="work" id="cars" value={work} onChange={(e)=>setWork(e.target.value)}>
            <option value="volvo">Complaint Type</option>
            <option value="Electrical">Electrical</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Civil">Civil</option>
            <option value="Paint">Paint</option>
            <option value="Other">Other</option>
          </select>
          
            <select style={{border:'1px solid black', width:'350px'}} name="cars" id="cars" value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="volvo">Work Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <br></br>

        <div className="input-wrapper">
          <input style={{border:'1px solid black', width:'720px'}} type="text" placeholder="Complete Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
          
        </div>
        <br></br>
        <div className="input-wrapper">
          <input style={{border:'1px solid black', width:'720px'}} type="text" placeholder="Remarks" value={remarks} onChange={(e)=>setRemarks(e.target.value)}/>
          
        </div>

        <button type="submit">Submit</button>
      </form>
        <div>
          
    </div>
    </div>
      
    </div>
      
    </div>
    </>
  );
}

export default Complaint_Form;



// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import { Chart, CategoryScale } from 'chart.js';


// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col xs={12} md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFirstName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your first name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formLastName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your last name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter your password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Register
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RegistrationForm;




// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirm: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col xs={12} md={6}>
//           <Form onSubmit={handleSubmit}>
//             <Row>
//               <Col>
//                 <Form.Group controlId="formFirstName">
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter your first name"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col>
//                 <Form.Group controlId="formLastName">
//                   <Form.Label>Last Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter your last name"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Form.Group controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>

//             <Row>
//               <Col>
//                 <Form.Group controlId="formPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter your password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//               </Col>
//               <Col>
//                 <Form.Group controlId="formConfirmPassword">
//                   <Form.Label>Confirm Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Confirm your password"
//                     name="confirm"
//                     value={formData.confirm}
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Button variant="primary" type="submit">
//               Register
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RegistrationForm;


// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBSelect,
//   MDBRadio
// }
// from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer fluid>

//       <MDBRow className='justify-content-center align-items-center m-5'>

//         <MDBCard>
//           <MDBCardBody className='px-4'>

//             <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

//             <MDBRow>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
//               </MDBCol>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
//               </MDBCol>

//             </MDBRow>

//             <MDBRow>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
//               </MDBCol>

//               <MDBCol md='6' className='mb-4'>
//                 <h6 className="fw-bold">Gender: </h6>
//                 <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
//                 <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
//                 <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
//               </MDBCol>

//             </MDBRow>

//             <MDBRow>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
//               </MDBCol>

//               <MDBCol md='6'>
//                 <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
//               </MDBCol>

//             </MDBRow>

//             <MDBSelect
//               label='Choose option'
//               className='mb-4'
//               size='lg'
//               data={[
//                 { text: 'Choose option', value: 1, disabled: true },
//                 { text: 'Subject 1', value: 2 },
//                 { text: 'Subject 2', value: 3 },
//                 { text: 'Subject 3', value: 4 }
//               ]}
//               />
//             <MDBBtn className='mb-4' size='lg' type='submit'>Submit</MDBBtn>

//           </MDBCardBody>
//         </MDBCard>

//       </MDBRow>
//     </MDBContainer>
//   );
// }

