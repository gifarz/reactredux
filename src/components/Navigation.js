import React from 'react';
import {Navbar, NavDropdown, Nav, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

const Navigation = (props) => {

    const handleLogin = () => {
        props.history.push("/login")
    }

    const handleRegister = () => {
        props.history.push("/register")
    }

    const handleHome = () => {
        props.history.push("/")
    }

    const handleEmployee = () => {
        props.history.push("/employee")
    }
    

    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#00075e"}}>
            <Navbar.Brand onClick={handleHome} style={{cursor: "pointer", color: "white"}}>Redux-Hooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Button variant="light" className="w-100" onClick={handleEmployee}>Employees</Button>
                    </Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Button variant="primary" className="w-100" onClick={handleLogin}>Login</Button>
                    </Nav.Link>
                    <Nav.Link eventKey={2}>
                        <Button variant="danger" className="w-100" onClick={handleRegister}>Register</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);