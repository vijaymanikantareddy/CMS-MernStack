import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AdminNavi() {
    // const [username, setUsername] = useState('');

    const handleLogout = () => {
        console.log('Logged out!');
      };
  return (
    <Navbar collapseOnSelect expand="lg" className="sticky top-0 bg-indigo-600 w-full ">
      <Container className='w-full'>
        <Navbar.Brand as={Link} to="/"  className='text-white font-bold italic'>Central Maintenance System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admincomform" className='text-white px-3'>Complaint Form</Nav.Link>
            <Nav.Link as={Link} to="/admincomplaints" className='text-white px-3'>All Complaints</Nav.Link>
            <Nav.Link as={Link} to="/adminusers" className='text-white px-3'>User Data</Nav.Link>
           
          </Nav>
          <Nav>
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavi;