import React, { useState } from 'react';
import Navbar from './Navbar';
import Report from './repo';
// import './App.css';

function App() {
  const [college, setCollege] = useState('');
  const [building, setBuilding] = useState('');
  const [typeOfWork, setTypeOfWork] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showTable, setShowTable] = useState(false);

  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
  }

  const handleBuildingChange = (event) => {
    setBuilding(event.target.value);
  }

  const handleTypeOfWorkChange = (event) => {
    setTypeOfWork(event.target.value);
  }

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }

  const handleFindClick = () => {
    setShowTable(true);
  }

  const data = [
    { college: 'College 1', building: 'Building 1', typeOfWork: 'Type 1', startDate: '2022-01-01', endDate: '2022-01-31' },
    { college: 'College 2', building: 'Building 2', typeOfWork: 'Type 2', startDate: '2022-02-01', endDate: '2022-02-28' },
    { college: 'College 3', building: 'Building 3', typeOfWork: 'Type 3', startDate: '2022-03-01', endDate: '2022-03-31' },
  ];

  return (
<>
    <div className='row'>
      <div className='col-md-3'><Navbar/></div>
      <div className='col-md-9'>
{/*         




    <div className="container">
      <div className="filter-container">
        <select className="filter" value={college} onChange={handleCollegeChange}>
          <option value="">Select College</option>
          <option value="College 1">College 1</option>
          <option value="College 2">College 2</option>
          <option value="College 3">College 3</option>
        </select>
        <select className="filter" value={building} onChange={handleBuildingChange}>
          <option value="">Select Building</option>
          <option value="Building 1">Building 1</option>
          <option value="Building 2">Building 2</option>
          <option value="Building 3">Building 3</option>
        </select>
        <select className="filter" value={typeOfWork} onChange={handleTypeOfWorkChange}>
          <option value="">Select Type of Work</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>
        </select>
        <input type="date" className="filter" value={fromDate} onChange={handleFromDateChange} />
        <input type="date" className="filter" value={endDate} onChange={handleEndDateChange} />
        <button className="find-button" onClick={handleFindClick}>Find</button>
      </div>

      {showTable &&
        <table className="table">
          <thead>
            <tr>
              <th>College</th>
              <th>Building</th>
              <th>Type of Work</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.college}</td>
                <td>{row.building}</td>
                <td>{row.typeOfWork}</td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div> */}
<Report/>
    
    </div>
    </div>
    </>
  );
}

export default App;

             
