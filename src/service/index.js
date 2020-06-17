import API from '../api';

async function GetEmployee() {
    const response = await API.get("/users");
    console.log(response)
    return response;
}

async function GetEmployeeById(_id) {
    const response = await API.get(`/users/${_id}`);
    console.log(response)
    return response;
}

async function AddEmployee(name, age, salary) {
  
    const form = {
        name: name,
        age: age,
        salary: salary,
    }

    const response = await API.post("/users", form);
    console.log(response)
    return response;
}

async function UpdateEmployeeById(_id, name, age, salary) {
  
    const form = {
        name: name,
        age: age,
        salary: salary,
    }

    const response = await API.put(`/users/${_id}`, form);
    console.log(response)
    return response;
}

async function DeleteEmployeeById(_id) {
  
    const response = await API.delete(`/users/${_id}`);
    console.log(response)
    return response;
}

export const ManageEmployee = {
    GetEmployee,
    GetEmployeeById,
    AddEmployee,
    UpdateEmployeeById,
    DeleteEmployeeById
}