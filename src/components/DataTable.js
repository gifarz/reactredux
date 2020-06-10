import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DeletePaymentById} from '../action';

export const DataTable = () => {

    const getPayment = useSelector(state => state.GetPayment);
    console.log(getPayment);
    const dispatch = useDispatch();

    const $ = require('jquery')
    $.Datatable = require('datatables.net')

    useEffect(() => {
        return (() => {
            console.log(this.el)
        })
    }, [])

    function renderList() {
        if (getPayment.data !== undefined) {
            // console.log('check', getPayment)
            return (
                <div>
                    <table id="table" className="table table-bordered table-hover" ref={el => this.el = el}>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Active</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getPayment.data.data.map(payment=>{
                            // console.log('ini payment', payment)
                            return (
                                <tr key={payment.id}>
                                    <td>{payment.id}</td>
                                    <td>{payment.name}</td>
                                    <td><input type="checkbox" checked data-toggle="toggle" data-width="100"/></td>
                                    <td>
                                        <button onClick={(id)=> dispatch(DeletePaymentById(payment.id))} type="button" className="btn btn-default" aria-label="Left Align">
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
        <div>
            {renderList()}
        </div>
    )
}