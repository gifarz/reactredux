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
    

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand onClick={handleHome} style={{cursor: "pointer"}}>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
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