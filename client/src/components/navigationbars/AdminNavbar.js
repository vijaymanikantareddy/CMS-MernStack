import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Navigationstyle.css";

function AdminNavbar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          className="custom-navbar"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="custom-brand">
              Central Maintenance System
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CMS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="custom-nav justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    as={Link}
                    to="/admincomplaintform"
                    className="custom-nav-link"
                  >
                    Complaint Form
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/allcomplaints"
                    className="custom-nav-link"
                  >
                    All Complaints
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/userdata"
                    className="custom-nav-link"
                  >
                    User Data
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/workerdata"
                    className="custom-nav-link"
                  >
                    Worker Data
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="custom-nav-link">
                    Logout
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default AdminNavbar;
