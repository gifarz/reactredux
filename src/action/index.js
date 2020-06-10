import {ManagePayment} from '../service';
import {
    GetPaymentMethod,
    PostPaymentMethod,
    UpdatePaymentMethod,
    DeletePaymentMethod
} from '../constants';

export function GetPayments() {

    return dispatch => {
        ManagePayment.GetPayment()
        .then(
            response => {
              const data = response;
              // console.log(data)
              if (response.status === 200) {
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
    function success(GetPayments) { return { type: GetPaymentMethod.GET_PAYMENT_SUCCESS, payload: { GetPayment: GetPayments } } }
    function failure(GetPayments) { return { type: GetPaymentMethod.GET_PAYMENT_FAILURE, payload: { GetPayment: GetPayments } } }
}

export function GetPaymentById(id) {

    return dispatch => {
        ManagePayment.GetPaymentById(id)
          .then(
            response => {
              const data = response.data;
              console.log(data)
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
      function success(GetPaymentById) { return { type: GetPaymentMethod.GET_PAYMENT_BY_ID_SUCCESS, payload: { GetPaymentById: GetPaymentById } } }
      function failure(GetPaymentById) { return { type: GetPaymentMethod.GET_PAYMENT_BY_ID_FAILURE, payload: { GetPaymentById: GetPaymentById } } }
}

export function PostPayment(name) {
    return dispatch => {
      ManagePayment.AddPayment(name)
        .then(
          response => {
            const data = response.data.data;
            console.log(data)
            if (response.status === 200) {
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
    function success(AddPayment) { return { type: PostPaymentMethod.POST_PAYMENT_SUCCESS, payload: { AddPayment: AddPayment } } }
    function failure(AddPayment) { return { type: PostPaymentMethod.POST_PAYMENT_FAILURE, payload: { AddPayment: AddPayment } } }
  }

export function UpdatePaymentById(id) {

    return dispatch => {
        ManagePayment.UpdatePaymentById(id)
          .then(
            response => {
              const data = response.data;
              console.log(data)
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
      function success(UpdatePaymentById) { return { type: UpdatePaymentMethod.UPDATE_PAYMENT_BY_ID_SUCCESS, payload: { UpdatePaymentById: UpdatePaymentById } } }
      function failure(UpdatePaymentById) { return { type: UpdatePaymentMethod.UPDATE_PAYMENT_BY_ID_FAILURE, payload: { UpdatePaymentById: UpdatePaymentById } } }
}

export function DeletePaymentById(id) {

    return dispatch => {
        ManagePayment.DeletePaymentById(id)
        .then(
        response => {
            const data = response;
            console.log(data)
            if (response.status === 200) {
                dispatch(success(id))
                }
            }
        )
        .catch(
            error => {
            const data = error.response;
            console.log(data)
            if (data.status === 401) {
                console.log(id)
            }
                dispatch(failure(data));
            }
        )
        function success(id) { return { type: DeletePaymentMethod.DELETE_PAYMENT_BY_ID_SUCCESS, payload: { DeletePayment: id } } }
        function failure(id) { return { type: DeletePaymentMethod.DELETE_PAYMENT_BY_ID_FAILURE, payload: { DeletePayment: id } } }
    }
}
