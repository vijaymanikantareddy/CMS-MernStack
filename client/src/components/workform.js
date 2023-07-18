import React, { useState } from 'react';
import './workform.css';
const Form = () => {
  const [id, setId] = useState('');
  const [college, setCollege] = useState('');
  const [building, setBuilding] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [complaint, setComplaint] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleIdChange = (event) => {
    const { value } = event.target;
    setId(value);
  };

  const handleSearchClick = () => {
    // Here, you can make an API call to retrieve the user data based on the ID entered
    // For simplicity, I'll just hardcode the user data
    if (id === '1205') {
      setCollege('Aditya College of Engineering and Technology');
      setBuilding('visweswara Bhavan');
      setLocation('IT 3rd Year Room');
      setDate('05-04-2023');
      setComplaint('CIVIL');
      setPriority('High');
      setDescription('This is sriram');
      setRemarks('IT student');
    }
    else if(id==='1260'){
        setCollege('Aditya College of Engineering and Technology');
        setBuilding('visweswara Bhavan');
        setLocation('IT 3rd Year Room');
        setDate('05-04-2023');
        setComplaint('Electrical');
        setPriority('High');
        setDescription('This is Satwika');
        setRemarks('IT student');
    }
    else if(id==='1252'){
        setCollege('Aditya College of Engineering and Technology');
        setBuilding('visweswara Bhavan');
        setLocation('IT 3rd Year Room');
        setDate('05-04-2023');
        setComplaint('Plumbing');
        setPriority('High');
        setDescription('This is Vijay');
        setRemarks('IT student');
    } 
    else if(id==='1254'){
        setCollege('Aditya College of Engineering and Technology');
        setBuilding('visweswara Bhavan');
        setLocation('IT 3rd Year Room');
        setDate('05-04-2023');
        setComplaint('Carpenter');
        setPriority('High');
        setDescription('This is neeraja');
        setRemarks('IT student');
    }  
    else {
        setCollege('');
        setBuilding('');
        setLocation('');
        setDate('');
        setComplaint('');
        setPriority('');
        setDescription('');
        setRemarks('');
    }
  };

  return (
    
    <form className='form_work'>

    
    
        <input type="text" placeholder='Enter the Job ID' value={id} onChange={handleIdChange} />
    
      <br />
      <button className='btn btn-info' type="button" onClick={handleSearchClick}>
        Search
      </button>
      <br />

      <div className="input-wrapper">
          <input placeholder='College Name' type='text' value={college} readOnly></input>
          
          
          <input placeholder='Building Name' type='text' value={building} readOnly></input>
          
          
        </div>
        <br></br>

        <div className="input-wrapper">
          <input placeholder='Location' type='text' value={location} readOnly></input>
          
          <input style={{width:'420px'}} placeholder='Location' type='date' value={date} readOnly></input>
          
        </div>
        <br></br>

        <div className="input-wrapper">
          <input placeholder='Complaint Type' type='text' value={complaint} readOnly></input>

          <input placeholder='Work Priority' type='text' value={priority} readOnly></input>
        
          
        </div>
        <br></br>

        <div className="input-wrapper">
          <input style={{border:'1px solid black', width:'920px'}} placeholder='Complete Description' type='text' value={description} readOnly></input>

          
        </div>
        <br></br>
        <div className="input-wrapper">
          <input style={{border:'1px solid black', width:'920px'}} placeholder='Remarks' type='text' value={remarks} readOnly></input>

        </div>

        <button className='bg-success' type="submit">Submit</button>
      
      </form>
      





    
  );
};

export default Form;
