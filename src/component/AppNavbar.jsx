import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import '../App.css';
import '../index.css'
import './AppNavbar.css'

function AppNavbar() {

    return (
        <React.Fragment>
            <Navbar expand="lg" className="main-navbar">
                <Container>
                    <Link to="/" className="navbar-brand" >eVoting Pakistan</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto nav-font">

                            <Link  to='/' className="NavUl" >Home</Link>
                            <Link  to='about' className="NavUl">About</Link>
                            <Link  to='problems' className="NavUl">Problems</Link>
                            <Link  to='allareas' className="NavUl">District & Sub-Division</Link>
                            <Link  to='contact' className="NavUl">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>
    )
}

export default AppNavbar;
