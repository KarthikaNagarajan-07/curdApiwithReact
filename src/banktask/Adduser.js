import React from 'react';
import { Grid } from '@material-ui/core';
const axios = require('axios');

class Adduser extends React.Component {
    state = {
        Name: "",
        Father_Name: "",
        Account_Balance: "",
        Email_ID: "",
        Contact_No: "",
        Branch_No: "",
        Account_No: "",
        Bank_Name: "",
        IFSC_Code: "",
        Aadhar_ID: "",
        PAN_Card_No: "",
        Account_Balance: "",
        Address: "",
        get: [],
    }

    submitClick = (e) => {
        e.preventDefault();
        var name = e.target.elements.Name.value
        var father_name = e.target.elements.Father_Name.value
        var account_balance = e.target.elements.Account_Balance.value
        var email_id = e.target.elements.Email_ID.value
        var contact_no = e.target.elements.Contact_No.value
        var branch_no = e.target.elements.Branch_No.value
        var account_no = e.target.elements.Account_No.value
        var bank_name = e.target.elements.Bank_Name.value
        var ifsc_code = e.target.elements.IFSC_Code.value
        var aadhar_id = e.target.elements.Aadhar_ID.value
        var pan_card_no = e.target.elements.PAN_Card_No.value
        var address = e.target.elements.Address.value

        this.setState({
            Name: name,
            Father_Name: father_name,
            Account_Balance: account_balance,
            Email_ID: email_id,
            Contact_No: contact_no,
            Branch_No: branch_no,
            Account_No: account_no,
            Bank_Name: bank_name,
            IFSC_Code: ifsc_code,
            Aadhar_ID: aadhar_id,
            PAN_Card_No: pan_card_no,
            Address: address, 
        })
        axios({
            method: "post",
            url: "https://66165a14b8b8e32ffc7d34b0.mockapi.io/user",
            headers: { 'content-type': 'application/json' },
            data: {
                name,
                father_name,
                account_balance,
                email_id,
                contact_no,
                branch_no,
                account_no,
                bank_name,
                ifsc_code,
                aadhar_id,
                pan_card_no,
                address,
            },

        })
        // .then(res => {
        //     console.log("successdata", res)
        // }).catch(error => {
        //     console.log(error, "error")
        // });  


        setTimeout(() => {
            this.props.history.push("/dashboard")
        }, 1000)
    }


    // componentDidMount() {
    //     axios.get("https://5df35f9af9e7ae0014801146.mockapi.io/banktask")
    //         .then(res => {
    //             // console.log(get)
    //             this.setState({ get: res.data })
    //             console.log("aererere", this.state.get)
    //         });
    // }
    render() {
        return (
            <div>
                <form onSubmit={this.submitClick}>
                    <h5>Details</h5>
                    <Grid container sm={12}>
                        <Grid item sm={4}>
                            <div>Name:</div><input type=" text" name="Name"></input>
                        </Grid>
                        <Grid item sm={4} >
                            <div >Father Name:</div><input type="text" name="Father_Name"></input>
                        </Grid>
                        <Grid item sm={4}>
                            <div>Account Balance:</div><input type="number" name="Account_Balance"></input>
                        </Grid>
                    </Grid>
                    <Grid container sm={12}>
                        <Grid item sm={4} >
                            <div>Email ID:</div><input type="text" name="Email_ID"></input>
                        </Grid>
                        <Grid item sm={4} >
                            <div>Contact No:</div> <input type="number" name="Contact_No"></input>
                        </Grid>
                        <Grid item sm={4} >
                            <div>Branch No:</div><input type="number" name="Branch_No"></input>
                        </Grid>
                    </Grid>
                    <Grid container sm={12}>

                        <Grid item sm={4} >
                            <div>Account No:</div><input type="number" name="Account_No"></input>
                        </Grid>

                        <Grid item sm={4} >
                            <div>Bank Name:</div><input type="text" name="Bank_Name"></input>
                        </Grid>
                        <Grid item sm={4} >
                            <div>IFSC Code:</div><input type="number" name="IFSC_Code"></input>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} className="">

                        <Grid item sm={4} >
                            <div>Aadhar ID:</div><input type="number" name="Aadhar_ID"></input>
                        </Grid>
                        <Grid item sm={4} >
                            <div>PAN Card No:</div><input type="number" name="PAN_Card_No"></input>
                        </Grid>
                        <Grid item sm={4} >
                            <div>Address:</div><input type="text" name="Address"></input>
                        </Grid>

                    </Grid>

                    <div className="submit_edit">
                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                    </div>
                </form>
            </div >
        )
    }
}

export default Adduser;