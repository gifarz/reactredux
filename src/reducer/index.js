import {combineReducers} from 'redux';
import {
    GetEmployeeMethod,
    PostEmployeeMethod,
    UpdateEmployeeMethod,
    DeleteEmployeeMethod
} from '../constants';

const initialState = {
    getEmployee: {},
    getEmployeeById: {},
    postEmployee: {},
    updateEmployeeById: {},
    deleteEmployeeById: {}
}

const GetEmployeeReducer = (state=initialState, action) => {
    switch (action.type) {
        case GetEmployeeMethod.GET_EMPLOYEE_SUCCESS:
            return action.payload.GetEmployee
        case GetEmployeeMethod.GET_EMPLOYEE_FAILURE:
            return action.payload.GetEmployee
        default:
            return {
                ...state.getEmployee
            }
        }
}

const GetEmployeeByIdReducer = (state=initialState, action) => {
    switch (action.type) {
        case GetEmployeeMethod.GET_EMPLOYEE_BY_ID_SUCCESS:
            return action.payload
        case GetEmployeeMethod.GET_EMPLOYEE_BY_ID_FAILURE:
            return action.payload
        default:
            return {
                ...state.getEmployeeById
            }
        }
}

const PostEmployeeReducer = (state=initialState, action) => {
    switch (action.type) {
        case PostEmployeeMethod.POST_EMPLOYEE_SUCCESS:
            return action.payload.AddEmployee
        case PostEmployeeMethod.POST_EMPLOYEE_FAILURE:
            return action.payload.AddEmployee
        default:
            return {
                ...state.postEmployee
            }
        }            
}

const UpdateEmployeeByIdReducer = (state=initialState, action) => {
    switch (action.type) {
        case UpdateEmployeeMethod.UPDATE_EMPLOYEE_BY_ID_SUCCESS:
            return action.payload
        case UpdateEmployeeMethod.UPDATE_EMPLOYEE_BY_ID_FAILURE:
            return action.payload
        default:
            return {
                ...state.updateEmployeeById
            }
        }
}

const DeleteEmployeeByIdReducer = (state=initialState, action) => {
    switch (action.type) {
        case DeleteEmployeeMethod.DELETE_EMPLOYEE_BY_ID_SUCCESS:
            return action.payload
        case DeleteEmployeeMethod.DELETE_EMPLOYEE_BY_ID_FAILURE:
            return action.payload
        default:
            return {
                ...state.deleteEmployeeById
            }
        }
}

export default combineReducers({
    GetEmployee: GetEmployeeReducer,
    GetEmployeeById : GetEmployeeByIdReducer,
    PostEmployee : PostEmployeeReducer,
    UpdateEmployeeById : UpdateEmployeeByIdReducer,
    DeleteEmployeeById : DeleteEmployeeByIdReducer
})