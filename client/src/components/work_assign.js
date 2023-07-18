import React from 'react'
import Navbar from './Navbar';
import './work.css';
import './complaint.css';
import Form from './workform';

function Work_assign(){
  return (
    <>
    <div className='row'>
        <div className='col-md-3'><Navbar/></div>
    <div  className='col-md-9 work-form'>
        <h1 style={{color:'black'}}>Work Assign Form</h1>
        <br></br>
        <br></br>
      <Form/>
    </div>
    </div>
        </>
    )
}
export default Work_assign