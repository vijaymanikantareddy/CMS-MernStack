import React, { useState } from 'react';

const UserReport = () => {
  const [data, setData] = useState([
    {
      id: 1,
      college: 'ABC College',
      building: 'Building A',
      date: '2022-03-30',
      status: 'Active',
    },
    {
      id: 2,
      college: 'XYZ College',
      building: 'Building B',
      date: '2022-03-31',
      status: 'Inactive',
    },
    {
      id: 3,
      college: 'ABC College',
      building: 'Building C',
      date: '2022-04-01',
      status: 'Active',
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [collegeFilter, setCollegeFilter] = useState('');
  const [buildingFilter, setBuildingFilter] = useState('');
  const [fromDateFilter, setFromDateFilter] = useState('');
  const [toDateFilter, setToDateFilter] = useState('');

  const handleCollegeFilterChange = (event) => {
    const { value } = event.target;
    setCollegeFilter(value);
    const filtered = data.filter((item) =>
      item.college.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleBuildingFilterChange = (event) => {
    const { value } = event.target;
    setBuildingFilter(value);
    const filtered = data.filter((item) =>
      item.building.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFromDateFilterChange = (event) => {
    const { value } = event.target;
    setFromDateFilter(value);
    const filtered = data.filter(
      (item) =>
        item.date >= value &&
        (toDateFilter === '' || item.date <= toDateFilter)
    );
    setFilteredData(filtered);
  };

  const handleToDateFilterChange = (event) => {
    const { value } = event.target;
    setToDateFilter(value);
    const filtered = data.filter(
      (item) =>
        item.date <= value &&
        (fromDateFilter === '' || item.date >= fromDateFilter)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <label style={{marginTop:'40px',marginLeft:'-500px'}}>
        Filter by College:
        <input type="text" value={collegeFilter} onChange={handleCollegeFilterChange} />
        
      </label>
      
      <label>
        Filter by Building:
        <input type="text" value={buildingFilter} onChange={handleBuildingFilterChange} />
      </label>
      <br />
      <br/>
      <label style={{marginTop:'40px',marginLeft:'-500px'}} >
        Filter by From Date:
        <input type="date" value={fromDateFilter} onChange={handleFromDateFilterChange} />
      </label>
       
      {/* <label>
        Filter by To Date:
        <input type="text" value={statusFilter} onChange={handleToDateFilterChange} />
      </label>  */}
      <br />

<br></br>
<br></br>
<br></br>
<br></br>
        <div className='row' >
          <div className='col-md-3'></div>
         <div className='col-md-6' > <table style={{marginLeft:'40px'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>College</th>
            <th>Building</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.college}</td>
<td>{item.building}</td>
<td>{item.date}</td>
<td>{item.status}</td>
</tr>
))}
</tbody>
</table>

    </div>
          <div className='col-md-3'></div>
        </div>


        


      
</>
);
};

export default UserReport;

