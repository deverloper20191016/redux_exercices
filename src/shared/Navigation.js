import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      //   <div>
      //     <Link to="/">Home</Link>
      //     <Link to="/about">About</Link>
      //     <Link to="/product">Product</Link>
      //   </div>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/product">
              Product
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
