import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import logo from  './images/logo.png'

function UserNavbar(){
    const logout=()=>{
            window.history.pushState({}, '', '/');
    }
    return(
        <>
           <nav>
            <ul style={{marginTop:'-50px'}} >
                <li>
                    <img src={logo} width={'100px'} style={{marginLeft:'50px',marginBottom:'30px'}}/>
                </li>
                <li>
                    <h3><NavLink to="/userdashboard">CMS</NavLink></h3>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/userdashboard">DashBoard</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/usercomplaints_form">Complaint Form</NavLink>
                    <hr/>
                </li>
                <li>
                    <NavLink to="/usercomplaint_list">Compalint List</NavLink>
                    <hr/>
                </li>
                {/* <li>
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
                </li> */}
                <li>
                    <button onClick={logout}>Log out</button>
                </li>
                </ul>
            </nav>
                
        </>
    )
}
export default UserNavbar
