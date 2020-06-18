import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PostEmployee } from './PostEmployee';
import { GetEmployee } from './GetEmployee';
import { ManageEmployee } from '../../service';
import { UpdateEmployeeById, GetEmployeeById, GetEmployees } from '../../action';

export const Employee = (props) => {

    const initialState = {
        _id: null,
        name: "",
        age: "",
        salary: ""
    }

    const [employee, setEmployee] = useState(initialState);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ 
            ...employee, 
            [name]: value 
        });
    }
    const CreateEmployee = (e) => {
        e.preventDefault();
        var data = {
          name: employee.name,
          age: employee.age,
          salary: employee.salary,
        };

        const {name, age, salary} = employee
    
        ManageEmployee.AddEmployee(name, age, salary)
    };

    const PutEmployee = (e, _id) => {
        e.preventDefault();
        const {name, age, salary} = employee
        dispatch(UpdateEmployeeById(_id, name, age, salary))
    }

    const handleDetail = (id) => {
        dispatch(GetEmployeeById(id))
        setShow(true)
    }

    return (
        <div className="container mt-5 mb-5">

            <PostEmployee 
            handleChange={handleChange} 
            CreateEmployee={CreateEmployee}
            employee={employee}
            />
            <GetEmployee 
            handleChange={handleChange} 
            employee={employee}
            PutEmployee={PutEmployee}
            handleDetail={handleDetail}
            updateEmployee={ManageEmployee.UpdateEmployeeById}
            />
            
        </div>
    )
}