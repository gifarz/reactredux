import {combineReducers} from 'redux';
import {
    GetPaymentMethod,
    PostPaymentMethod,
    UpdatePaymentMethod,
    DeletePaymentMethod
} from '../constants';

const initialState = {
    getPayment: {},
    getPaymentById: {},
    postPayment: undefined,
    updatePaymentById: {},
    deletePaymentById: {}
}

const GetPaymentReducer = (state=initialState, action) => {
    switch (action.type) {
        case GetPaymentMethod.GET_PAYMENT_SUCCESS:
            return action.payload.GetPayment
        case GetPaymentMethod.GET_PAYMENT_FAILURE:
            return action.payload.GetPayment
        default:
            return {
                ...state.getPayment
            }
        }
}

const GetPaymentByIdReducer = (state=initialState, action) => {
    switch (action.type) {
        case GetPaymentMethod.GET_PAYMENT_BY_ID_SUCCESS:
            return action.payload.getPaymentById
        case GetPaymentMethod.GET_PAYMENT_BY_ID_FAILURE:
            return action.payload.getPaymentById
        default:
            return {
                ...state.getPaymentById
            }
        }
}

const PostPaymentReducer = (state=initialState, action) => {
    switch (action.type) {
        case PostPaymentMethod.POST_PAYMENT_SUCCESS:
            return action.payload
        case PostPaymentMethod.POST_PAYMENT_FAILURE:
            return action.payload
        default:
            return {
                ...state.postPayment
            }
        }            
}

const UpdatePaymentByIdReducer = (state=initialState, action) => {
    switch (action.type) {
        case UpdatePaymentMethod.UPDATE_PAYMENT_BY_ID_SUCCESS:
            return action.payload.updatePaymentById
        case UpdatePaymentMethod.UPDATE_PAYMENT_BY_ID_FAILURE:
            return action.payload.updatePaymentById
        default:
            return {
                ...state.updatePaymentById
            }
        }
}

const DeletePaymentByIdReducer = (state=initialState, action) => {
    switch (action.type) {
        case DeletePaymentMethod.DELETE_PAYMENT_BY_ID_SUCCESS:
            return action.payload.deletePaymentById
        case DeletePaymentMethod.DELETE_PAYMENT_BY_ID_FAILURE:
            return action.payload.deletePaymentById
        default:
            return {
                ...state.deletePaymentById
            }
        }
}

export default combineReducers({
    GetPayment: GetPaymentReducer,
    GetPaymentById : GetPaymentByIdReducer,
    PostPayment : PostPaymentReducer,
    UpdatePaymentById : UpdatePaymentByIdReducer,
    DeletePaymentById : DeletePaymentByIdReducer
})