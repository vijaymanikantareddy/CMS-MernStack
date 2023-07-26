import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../styles/registyle.css';

function AllComplaints() {
    const [records, setRecords] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:5000/allcomplaints')
        .then(res => {
            setColumns(Object.keys(res.data[0]));
            setRecords(res.data)
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <>
    <div className='container mt-5'>
        <div className='text-end'><Link to="/createuser" className="btn btn-primary userdatastyle">Add User</Link></div>
        <table className='table table-hover'>
            <thead>
            <tr>
              <th>Email</th>
              <th>College</th>
              <th>Building</th>
              <th>Location</th>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Remark</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i._id}>
                <td>{d.email}</td>
                <td>{d.college}</td>
                <td>{d.building}</td>
                <td>{d.location}</td>
                <td>{d.dat}</td>
                <td>{d.comtype}</td>
                <td>{d.comdes}</td>
                <td>{d.remark}</td>
                <td>
                    <Link to="/updatestatus" className='btn btn-sm btn-success mb-1'>Update</Link>
                    <Link to="/deletecomplaint" className='btn btn-sm btn-danger ml-1 mb-1'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </>
  )
}

export default AllComplaints