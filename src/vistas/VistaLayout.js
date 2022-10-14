import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";

export default class VistaLayout extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            {localStorage.getItem("nombreTenant")}
          </Navbar.Brand>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
