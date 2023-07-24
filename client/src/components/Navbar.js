import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import logo from  './images/logo.png'

function Navbar(){
    return(
        <>
           <nav>
            <ul style={{marginTop:'-50px'}}>
            <li>
                    <img src={logo} width={'100px'} style={{marginLeft:'40px',marginBottom:'30px'}}/>
            </li>
                <li>
                    <h3><NavLink to="/dashboard">CMS</NavLink></h3>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/dashboard">DashBoard</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/complaint_form">Complaint Form</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/complaint_list">Compalint List</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/work_assign">Work Assign</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/work_assign_list">Work Assign List</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/report">Report</NavLink>
                    <hr/>
                </li>
                </ul>
            </nav>
                
        </>
    )
}
export default Navbar
