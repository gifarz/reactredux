import API from '../api';

async function GetPayment() {
    const response = await API.get("/payments");
    // console.log(response)
    return response;
}

async function GetPaymentById(id) {
    const response = await API.get(`/payments/${id}`);
    // console.log(response)
    return response;
}

async function AddPayment(data) {
  
    const response = await API.post("/payments", data);
    // console.log(response)
    return response;
}

async function UpdatePaymentById(id) {
  
    const response = await API.put(`/payments/${id}`);
    // console.log(response)
    return response;
}

async function DeletePaymentById(id) {
  
    const response = await API.delete(`/payments/${id}`);
    // console.log(response)
    return response;
}

export const ManagePayment = {
    GetPayment,
    GetPaymentById,
    AddPayment,
    UpdatePaymentById,
    DeletePaymentById
}