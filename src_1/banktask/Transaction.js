import React from 'react';
import './Transaction.css';
const axios = require('axios');

class Transaction extends React.Component {
    state = {
        show: false,
        id: "",
        get: [],
        credeb_amount: null,
    }
    componentDidMount() {
        axios.get(`https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${this.props.match.params.id}`)
            .then(res => {
                const get = res.data;
                console.log(get, "demotest")
                this.setState({
                    get,
                })
            })
    }
    componentDidUpdate() {
        axios.get(`https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${this.props.match.params.id}`)
            .then(res => {
                const get = res.data;
                console.log(get, "demotest")
                this.setState({
                    get
                })
            })
    }
    creditClick = (e) => {
        this.setState({
            show: !this.state.show,
        })
    }
    addClick = (id, balance, parameter) => {
        alert(this.state.credeb_amount)
        var account_balance;
        {
            account_balance = parameter == "credit" ?

                this.state.credeb_amount >= 500 ? parseInt(balance) + parseInt(this.state.credeb_amount) : alert("Please enter higher amount")
                :
                this.state.credeb_amount < balance ? parseInt(balance) - parseInt(this.state.credeb_amount) : alert("Please enter lower amount")
        }
        axios({
            method: "put",
            url: `https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${id}`,
            headers: { 'content-type': 'application/json' },
            data: {
                account_balance,
            }
        })
        this.setState({
        })
    }
    credebfunction = (e) => {
        var credeb_amount = e.target.value
        this.setState({
            credeb_amount,
        })
    }
    transactiontoothersClick = (id) => {
        alert(id)
        console.log(id, "iddddd")
        this.props.history.push(`/Transactiontoothers/${id}`)
    }
    render() {
        console.log(this.state.get)
        const { id, name, account_no, account_balance } = this.state.get;
        return (
            <div>
                <div>
                    <h2><b>Welcome to HDFC Bank</b></h2>
                    <ul className="list_edit">
                        <li><h6 onClick={this.creditClick}>Credit</h6></li>
                        <li><h6 onClick={this.creditClick}>Debit</h6></li>
                        <li><h6 onClick={() => this.transactiontoothersClick(id)}>Transfer to Others </h6></li>
                    </ul>
                </div>
                <div className="current_editing">
                    <h4>Available Balance:{account_balance}</h4>
                </div>
                <form>
                    <div className="card c_align">
                        <div className="card-body">
                            <h4 className="credit_edit">{this.state.show == false ? "Credit" : "Debit"} Message</h4>
                            <p>id:{id}</p>
                            <p>Name:{name}</p>
                            <p>Account No:{account_no}</p>
                            <div>Enter the amount you want to {this.state.show == false ? "credit" : "debit"}<input type="number" onChange={this.credebfunction} ></input></div>
                            <div><button type="submit" className="btn btn-info submit_edit" onClick={(e) => { e.preventDefault(); this.addClick(id, account_balance, this.state.show == false ? "credit" : "debit") }}>Submit</button></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Transaction;