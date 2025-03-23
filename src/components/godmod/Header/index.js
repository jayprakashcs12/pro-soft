import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { IoEyeOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";
import { CiPower } from "react-icons/ci";
import { Link } from "react-router";

const Header = () => {

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary pro-navbar" bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand> Project </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="header-link" to="/dashboard"> Dashboard </Link>
                    </Nav>
                    <Nav>
                        <Nav className="me-auto">
                            <NavDropdown title="Pro" id="collapsible-nav-dropdown" className="pro-dropdown">
                                <NavDropdown.Item> <Link className="header-link" to="/view-profile"> <IoEyeOutline /> View Profile </Link> </NavDropdown.Item>
                                <NavDropdown.Item> <Link className="header-link" to="/update-profile"> <BsPencil /> Edit Profile </Link> </NavDropdown.Item>
                                <NavDropdown.Item> 
                                    <Link className="header-link" onClick={() => {window.location.href = "/"; }}> <CiPower /> Log-Out </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;