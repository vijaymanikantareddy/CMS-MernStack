import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function UserNavi() {
    // const [username, setUsername] = useState('');

    const handleLogout = () => {
        console.log('Logged out!');
      };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-indigo-600">
      <Container>
        <Navbar.Brand as={Link} to="/"  className='text-white font-bold italic'>Central Maintenance System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/usercomform" className='text-white px-3'>Complaint Form</Nav.Link>
            <Nav.Link as={Link} to="/usercomplaints" className='text-white px-3'>My Complaints</Nav.Link>
           
          </Nav>
          <Nav>
            {/* <Nav.Link className='text-white px-3'>{username || 'User Name'}</Nav.Link> */}
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavi;