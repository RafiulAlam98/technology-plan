import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // Creating Header Component Link
  return (
    <div className="nav-container d-flex p-4 justify-content-between">
      <div className="d-flex">
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
      </div>
      <div>
        <h1 className="nav-header">TECH PLAN BD</h1>
      </div>
    </div>
  );
};

export default Header;
