import React from 'react';
import {InputGroup, FormControl, Card, ListGroup, Button} from 'react-bootstrap';

export const Login = (props) => {

    const handleRegister = () => {
        props.history.push("/register")
    }

    return (
        <>
        <div className="container mt-5">
            <div className="d-flex justify-content-center" >
                <Card style={{ width: '50%' }}>
                <Card.Header style={{fontSize: "20px"}}>Please Login</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="mt-2">
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant="primary" className="w-100">Go somewhere</Button>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center">
                        <p>Don't have an account yet ? please login <a href onClick={handleRegister} style={{color: "blue", cursor: "pointer"}}>here</a></p>
                    </ListGroup.Item>
                </ListGroup>
                </Card>
            </div>
        </div>
        </>
    )
}