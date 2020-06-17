import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetEmployees, DeleteEmployeeById, UpdateEmployeeById, GetEmployeeById } from '../../action';
import { Button, Modal, ButtonGroup, ToggleButton } from 'react-bootstrap';
import $ from 'jquery';

export const GetEmployee = (props) => {

    const [employees, setEmployees] = useState(props.employee)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        console.log(id)
        setShow(true)
    };

    const [toggleValue, setToggleValue] = useState('1');

    const toggle = [
        { name: 'ON', value: "1"}, 
        { name: 'OFF', value: "2"},
    ];

    const getEmployee = useSelector(state => state.GetEmployee);
    const dispatch = useDispatch();

    useEffect(()=> {

        setTimeout(() => {
            $('#datatable').DataTable();
        }, 3000);
        
        dispatch(GetEmployees());

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDetail = (id) => {
        dispatch(GetEmployeeById(id));
        setShow(true)
    }


    function renderList() {
        if (getEmployee.data !== undefined) {
            // console.log('check', getEmployee.data)
            return (
            <div>
                <table id="datatable" className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Employee Age</th>
                        <th>Employee Salary</th>
                        <th>Active</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getEmployee.data.map(employee=>{
                        // console.log('ini employee', employee)
                        return (
                            <tr key={employee._id}>
                                <td>{employee._id}</td>
                                <td onClick={(e)=> handleDetail(employee._id)} style={{cursor: "pointer"}}>{employee.name}</td>
                                <td>{employee.age}</td>
                                <td>{employee.salary}</td>
                                <td>
                                <ButtonGroup toggle>
                                    {toggle.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="secondary"
                                        name="radio"
                                        value={radio.value}
                                        checked={toggleValue === radio.value}
                                        onChange={(e) => setToggleValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                    ))}
                                </ButtonGroup>
                                </td>
                                <td>
                                    <button onClick={(id)=> dispatch(DeleteEmployeeById(employee._id))} type="button" className="btn btn-default" aria-label="Left Align">
                                        <svg className="bi bi-trash-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            )
        }
    } 

    return (
        <>
            {renderList()}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <form onSubmit={(e, _id)=> props.PutEmployee(e, _id)}>
                    <Modal.Body>
                        <input type="text" className="form-control mb-2" name="name" id="name" value={employees.name} onChange={(e)=> props.handleChange(e)} placeholder="Employee Name"/>
                        <input type="number" className="form-control mb-2" name="age" id="age" value={employees.age} onChange={(e)=> props.handleChange(e)} placeholder="Employee Age"/>
                        <input type="number" className="form-control mb-2" name="salary" id="salary" value={employees.salary} onChange={(e)=> props.handleChange(e)} placeholder="Employee Salary"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onHide={handleShow}>
                            Update Employee
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
