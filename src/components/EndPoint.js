import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ManagePayment} from '../service';
import {Button, Modal} from 'react-bootstrap';
import {GetPayments} from '../action';

export const EndPoint = (props) => {

    const initialState = {
        id: null,
        name: ""
    }

    const [payment, setPayment] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetPayments());
    },[])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment({ 
            ...payment, 
            [name]: value 
        });
    }

    const PostPayments = (e) => {
        e.preventDefault();
        var data = {
          name: payment.name,
        };
    
        ManagePayment.AddPayment(data)
            .then(response => {
                setPayment({
                    id: response.data.id,
                    name: response.data.name
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
        });
    };

    return (
        <>
        <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleShow} >
                + Add
            </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Payment</Modal.Title>
            </Modal.Header>
            <form onSubmit={(e)=> PostPayments(e)}>
                <Modal.Body>
                    <input type="text" className="form-control" name="name" id="name" value={payment.name} onChange={(e)=> handleChange(e)} placeholder="payment name"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onHide={handleShow}>
                        Add Payment
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
        </>
    )
}