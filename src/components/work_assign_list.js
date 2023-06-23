import Navbar from './Navbar';
import React, { useState } from 'react';
import './complaint.css';
import './worklist.css';

function App() {
  const [activeTable, setActiveTable] = useState('pending');

  const showTable = (table) => {
    setActiveTable(table);
  }

  return (
    
    <>
    <div className='row'>
         <div className='col-md-3'><Navbar/></div>
     <div  className='form col-md-9'>
         <h1>Here we see the list of work assigns</h1>
         <br></br>
         <div className="container">
      <div className="button-container">
        <button className={`button ${activeTable === 'pending' ? 'active' : ''}`} onClick={() => showTable('pending')}>Pending</button>
        <button className={`button ${activeTable === 'completed' ? 'active' : ''}`} onClick={() => showTable('completed')}>Completed</button>
      </div>

      <div className='div1'>
      <table className={`table ${activeTable === 'pending' ? 'active' : ''}`} style={{background: 'linear-gradient(to top, #669999 0%, #ffffcc 100%)'}}>
      
        
          <tr>
            <th>S. No</th>
            <th>College name</th>
            <th>Building name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Complaint Type</th>
            
            <th>Complaint Description</th>
            
            
            <th>Resolved</th>
            <th>Work Priority</th>
            <th>Job Code</th>
            
            <th>Status</th>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>NA</td>
            <td>The totanaijfn ahoi</td>
            <td>High</td>
            
            <td>1205605254</td>
            <td>Completed</td>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>NA</td>
            <td>The totanaijfn ahoi</td>
            <td>High</td>
            
            <td>1205605254</td>
            <td>Completed</td>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>NA</td>
            <td>The totanaijfn ahoi</td>
            <td>High</td>
            
            <td>1205605254</td>
            <td>Completed</td>
            
          </tr>
        </table>
        </div>

      {/* <table className={`table ${activeTable === 'completed' ? 'active' : ''}`}>
        <thead> 
        
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task 4</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>Task 5</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table> */}


      <div className='div1 scroll_tab'>
      <table className={`table ${activeTable === 'completed' ? 'active' : 'inactive'}`} style={{background: 'linear-gradient(to top, #669999 0%, #ffffcc 100%)'}}>
      
        
          <tr>
            <th>S. No</th>
            <th>College name</th>
            <th>Building name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Complaint Type</th>
            <th>Work Priority</th>
            <th>Complaint Description</th>
            <th>Job Code</th>
            <th>Resolved</th>
            <th>Status</th>
            <th>Work Priority</th>
            <th>Complaint Description</th>
            <th>Job Code</th>
            <th>Resolved</th>
            <th>Status</th>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            
          </tr>
          {/* <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            
          </tr>
          <tr>
            <td>1.</td>
            <td>Aditya College of Engineering and Technology</td>
            <td>C V RAMAN</td>
            <td>301 Room</td>
            <td>04-04-2023</td>
            <td>ELECTRICIAL</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            <td>High</td>
            <td>NA</td>
            <td>1205605254</td>
            <td>Not yet</td>
            <td>Completed</td>
            
          </tr> */}
        </table>
        </div>



    </div>

     </div>
     </div>



    
    </>

  );
}

export default App;
