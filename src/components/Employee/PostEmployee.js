import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

export const PostEmployee = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="d-flex justify-content-end mb-2">
            <Button variant="primary" onClick={handleShow} >
                + Add Employee
            </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <form onSubmit={(e)=> props.CreateEmployee(e)}>
                <Modal.Body>
                    <input type="text" className="form-control mb-2" name="name" id="name" value={props.employee.name} onChange={(e)=> props.handleChange(e)} placeholder="Employee Name"/>
                    <input type="number" className="form-control mb-2" name="age" id="age" value={props.employee.age} onChange={(e)=> props.handleChange(e)} placeholder="Employee Age"/>
                    <input type="number" className="form-control mb-2" name="salary" id="salary" value={props.employee.salary} onChange={(e)=> props.handleChange(e)} placeholder="Employee Salary"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onHide={handleShow}>
                        Add Employee
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
        </>
    )
}