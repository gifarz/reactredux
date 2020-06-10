// import "./css/jquery.dataTables.css"
import React, { Component } from 'react'

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Table extends Component {

    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el);
        const data = this.props.data.data;
        console.log(data);
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    {title:"Id"},
                    {title:"Name"},
                    {title:"Active"},
                    {title:"Delete"},
                ]
            }
        )
    }
    

    componentWillMount() {

    }

    render() {
        return <div>
            <table className="display" width="100%" ref={el => this.el = el} >

            </table>
        </div>
    }

}