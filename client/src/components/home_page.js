import React from 'react'
import './home.css'
import {Link} from 'react-router-dom';


function Homee(){
    
    return(
        <div>
            <div className='emptyspace'></div>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-1'>
                <Link to='/login'><button className='login_button'>Login</button></Link>
                
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-1'>
                <Link to='/register'><button className='register_button'>Register</button></Link>
                
            </div>
            <div className='col-md-4'>
            </div>
        </div>
        <center>
        <p id='foot'>&#169; Copyright 2023  Web Makers. All rights reserved</p>
        </center>
        </div>
        
    )
}
export default Homee