import {ManageEmployee} from '../service';
import {
    GetEmployeeMethod,
    PostEmployeeMethod,
    UpdateEmployeeMethod,
    DeleteEmployeeMethod
} from '../constants';

export function GetEmployees() {

    return dispatch => {
        ManageEmployee.GetEmployee()
        .then(
            response => {
              const data = response;
              console.log(data)
              if (data.status === 200) {
                dispatch(success(data))
              }
            }
        )
        .catch(
            error => {
                const data = error.response;
                console.log(data)
                if (data.status === 401) {
                console.log(data.result)
                }
                dispatch(failure(data));
            }
        )
    }
    function success(GetEmployees) { return { type: GetEmployeeMethod.GET_EMPLOYEE_SUCCESS, payload: { GetEmployee: GetEmployees } } }
    function failure(GetEmployees) { return { type: GetEmployeeMethod.GET_EMPLOYEE_FAILURE, payload: { GetEmployee: GetEmployees } } }
}

export function GetEmployeeById(_id) {

    return dispatch => {
        ManageEmployee.GetEmployeeById(_id)
          .then(
            response => {
              const data = response;
              console.log(data.data)
              if (data.status !== undefined) {
                dispatch(success(data))
              }
            }
          )
          .catch(
              error => {
                const data = error.response;
                console.log(data)
                if (data.status === 401) {
                  console.log(data)
                }
                dispatch(failure(data));
              }
          )
      }
      function success(GetEmployeeId) { return { type: GetEmployeeMethod.GET_EMPLOYEE_BY_ID_SUCCESS, payload: { GetEmployeeId: GetEmployeeId._id } } }
      function failure(GetEmployeeId) { return { type: GetEmployeeMethod.GET_EMPLOYEE_BY_ID_FAILURE, payload: { GetEmployeeId: GetEmployeeId } } }
}

export function PostEmployee(name, age, salary) {
    return dispatch => {
      ManageEmployee.AddEmployee(name, age, salary)
        .then(
          response => {
            const data = response;
            console.log(data)
            if (data.status === 200) {
              dispatch(success(data))
            }
          }
        )
        .catch(
            error => {
              const data = error.response;
              console.log(data)
              if (data.status === 401) {
                console.log(data)
              }
              dispatch(failure(data));
            }
        )
    }
    function success(AddEmployee) { return { type: PostEmployeeMethod.POST_EMPLOYEE_SUCCESS, payload: { AddEmployee: AddEmployee } } }
    function failure(AddEmployee) { return { type: PostEmployeeMethod.POST_EMPLOYEE_FAILURE, payload: { AddEmployee: AddEmployee } } }
  }

export function UpdateEmployeeById(_id, name, age, salary) {

    return dispatch => {
        ManageEmployee.UpdateEmployeeById(_id, name, age, salary)
          .then(
            response => {
              const data = response;
              console.log(data)
              if (data.status === 200) {
                dispatch(success(data))
              }
            }
          )
          .catch(
              error => {
                const data = error.response;
                console.log(data)
                dispatch(failure(data));
              }
          )
      }
      function success(UpdateEmployeeById) { return { type: UpdateEmployeeMethod.UPDATE_EMPLOYEE_BY_ID_SUCCESS, payload: { UpdateEmployeeById: UpdateEmployeeById } } }
      function failure(UpdateEmployeeById) { return { type: UpdateEmployeeMethod.UPDATE_EMPLOYEE_BY_ID_FAILURE, payload: { UpdateEmployeeById: UpdateEmployeeById } } }
}

export function DeleteEmployeeById(_id) {

    return dispatch => {
        ManageEmployee.DeleteEmployeeById(_id)
        .then(
        response => {
            const data = response;
            console.log(data)
            if (data.status === 200) {
                dispatch(success(_id))
                }
            }
        )
        .catch(
            error => {
            const data = error.response;
            console.log(data)
            dispatch(failure(_id));
            }
        )
        function success(_id) { return { type: DeleteEmployeeMethod.DELETE_EMPLOYEE_BY_ID_SUCCESS, payload: { DeleteEmployee: _id } } }
        function failure(_id) { return { type: DeleteEmployeeMethod.DELETE_EMPLOYEE_BY_ID_FAILURE, payload: { DeleteEmployee: _id } } }
    }
}
