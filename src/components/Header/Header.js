import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
    textDecoration: 'none',
  };
  return (
    <div>
      <Navbar className="p-4" id="nav-container" bg="" variant="light">
        <Container>
          <Nav className="me-auto">
            <NavLink className=" nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className=" nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
