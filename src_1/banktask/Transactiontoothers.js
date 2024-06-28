import React from 'react';
import './Transactiontoothers.css';
const axios = require('axios');


class Transactiontoothers extends React.Component {
    state = {
        id_change: null,
        getname: [],
        // id: "",
        show_name: [],
        cre_amount: null,

    }
    componentDidMount() {
        axios.get(`https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${this.props.match.params.id}`)
            .then(res => {
                const getname = res.data;
                // console.log(getname, "getname")
                this.setState({
                    getname,
                })

            })

    }
    componentDidUpdate() {
        axios.get(`https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${this.props.match.params.id}`)
            .then(res => {
                const getname = res.data;
                console.log(getname, "getname")
                this.setState({
                    getname,
                })

            })
    }
    idnoChange = (e) => {
        var id_change = e.target.value
        console.log(id_change)

        this.setState({
            id_change,
        })
    }
    creditChange = (e) => {
        var cre_amount = e.target.value

        this.setState({
            cre_amount,
        })
    }
    sendClick = (id, Balance) => {
        var account_balance;

        {
            this.state.getname.id != this.state.show_name.id ?

                account_balance = parseInt(Balance) - parseInt(this.state.cre_amount)
                :
                alert("please choose another id")
        }
        axios({
            method: "put",
            url: `https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${id}`,
            headers: { 'content-type': 'application/json' },
            data: {
                account_balance,
            }
        })

        {
            this.state.getname.id != this.state.id_change.id ?

                account_balance = parseInt(this.state.cre_amount) + parseInt(this.state.show_name.account_balance)
                // alert("test messge")
                :
                alert("please choose another id")
        }
        axios({
            method: "put",
            url: `https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${this.state.show_name.id}`,
            headers: { 'content-type': 'application/json' },
            data: {
                account_balance,
            }
        })

        this.setState({
        })
    }
    showClick = (id) => {

        axios.get(`https://5df35f9af9e7ae0014801146.mockapi.io/testbank/${id}`)
            .then(res => {
                const show_name = res.data;
                console.log(show_name, "show_name")

                // alert(id)
                this.setState({
                    show_name,
                })

            })
    }
    render() {
        const { id, account_balance } = this.state.getname
        // alert(id)
        console.log(this.id_change, "id_change")

        return (
            <form>
                <h5 className="transactionhead_editing">Welcome to Transaction Page</h5>
                <h5>Available Balance:{account_balance}</h5>
                <div className="card tras_cardedit">
                    <div className="card-body">
                        <div>
                            <div className="text_editing">Enter the ID No:</div>
                            <input type="number" onChange={this.idnoChange}></input>
                            <button type="button" className="btn btn-info show_edit btn-sm" onClick={() => this.showClick(this.state.id_change, id)}>Show</button>
                        </div>
                        <p className="text_editing">Name of the customer: <b className="nameclr_edit">{this.state.show_name.name}</b></p>
                        <div className="text_editing">Enter the amount you want to credit:<input type="number" onChange={this.creditChange}></input></div>
                        <div><button type="submit" className="btn btn-info send_button" onClick={(e) => { e.preventDefault(); this.sendClick(id, account_balance) }}>Send</button></div>
                    </div>
                </div>
            </form>
        )
    }
}
export default Transactiontoothers;