import React from 'react';
import './Check.css';
import 'antd/dist/antd.css';
// import Transaction from './banktask/Transaction';
import { Modal, Button } from 'antd';
const axios = require('axios');

class Dashboard extends React.Component {
    state = {
        get: [],
        visible: false,
        currentid: "",
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        axios.get("https://5df35f9af9e7ae0014801146.mockapi.io/testbank")
            .then(res => {
                const get = res.data;
                console.log(get, "hellllooooo")
                this.setState({
                    get
                })

            })

    }
    componentDidUpdate() {
        axios.get("https://5df35f9af9e7ae0014801146.mockapi.io/testbank")
            .then(res => {
                const get = res.data;
                console.log(get, "hai")
                this.setState({
                    get
                })
            })
    }
    moreClick = (id) => {

        this.setState({
            currentid: id,
            visible: true,
        })

    }

    deleteClick = (id) => {

        axios({
            method: "delete",
            url: (`https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${id}`)
        })

    }

    transactionClick = (id, name) => {
        // alert("iddd")
        this.props.history.push(`/Transaction/${id}`)
    }

    render() {

        return (
            <>
                <div className="row p-3 m-0" >
                    {
                        this.state.get.map((val) => {
                            return (

                                <div className="col-sm-4 p-0">
                                    <div className="card card_align mb-2">
                                        <div className="card-body">
                                            <p>id:{val.id}</p>
                                            <p>Name:{val.name}</p>
                                            <p>Father_Name:{val.father_name}</p>
                                            <p>Account_Balance:{val.account_balance}</p>
                                            <div>
                                                <button type="button" className="btn btn-sm btn-info" onClick={() => this.transactionClick(val.id, val.name)}>Transaction</button>
                                                <button type="button" className="mr-2 ml-2 btn btn-sm btn-primary" onClick={() => this.moreClick(val.id)}>More Details</button>
                                                <button type="button" className="btn btn-sm btn-danger" onClick={() => this.deleteClick(val.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )

                        }
                        )}
                </div>

                <div>

                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        {
                            this.state.get.map((val) => {

                                return (
                                    this.state.currentid == val.id &&

                                    <div>
                                        <p>Name:{val.name}</p>
                                        <p>Father_Name:{val.father_name}</p>
                                        <p>Account Balance:{val.account_balance}</p>
                                        <p>Email ID:{val.email_id}</p>
                                        <p>Contact No:{val.contact_no}</p>
                                        <p>Branch No:{val.branch_no}</p>
                                        <p>Account No:{val.account_no}</p>
                                        <p>Bank Name:{val.bank_name}</p>
                                        <p>IFSC Code:{val.ifsc_code}</p>
                                        <p>Aadhar Id:{val.aadhar_id}</p>
                                        <p>PAN Card No:{val.pan_card_no}</p>
                                        <p>Address:{val.address}</p>

                                    </div>
                                )
                            })
                        }


                    </Modal>
                </div>

            </>
        )
    }

}
export default Dashboard;