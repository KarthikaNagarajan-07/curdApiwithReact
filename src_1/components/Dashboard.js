import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./Dashboard.css";
import MoreDetails from "./pages/Moredetails";
const axios = require("axios");

class Dashboard extends React.Component {
  state = {
    Transactionbalance: "₹10000",
    details: [],
    visible: false,
    clicked: false
  };
  componentDidMount() {
    debugger
    axios
      .get("https://66165a14b8b8e32ffc7d34b0.mockapi.io/bankapi")
      .then(res => {
        const details = res.data;
        console.log(details, "details");
        this.setState({
          details
        });
      });
  }
  componentDidUpdate() {
    debugger
    axios
      .get("https://66165a14b8b8e32ffc7d34b0.mockapi.io/bankapi")
      .then(res => {
        const details = res.data;
        console.log(details, "details");
        this.setState({
          details
        });
      });
  }
  addPage = () => {
    this.props.history.push("/form");
  };

  moreDetails = id => {
    console.log("checking", id);

    this.setState({
      visible: true,
      currentid: id
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  transaction = () => {
    alert("transaction");
    this.props.history.push("/transaction");
  };

  deleteFunction = id => {
    alert(id);

    axios
      .delete(`https://5df341cf9b71960014bf6a77.mockapi.io/bankapi/${id}`)
      .then(res => {
        const details = res.data;
        console.log(details, "details");
        // window.location.reload()
        this.setState({});
      });
  };

  render() {
    return (
      <>
        {this.state.details != undefined && (
          <div className="row m-0">
            {this.state.details.map(val => {
              return (
                <div className="col-4 mt-5">
                  <div className="card">
                    <div className="card-body">
                      <p>id : {val.id}</p>
                      <p>Name :{val.Name_api}</p>
                      <p> phone No : {val.Phone_api}</p>
                      <p>
                        {" "}
                        Transaction Balance :{this.state.Transactionbalance}
                      </p>

                      <button onClick={this.transaction}>Transaction</button>
                      <button
                        className="more_align"
                        onClick={() => this.moreDetails(val.id)}
                      >
                        More Details
                      </button>

                      <button
                        type="reset"
                        className=" btn_delete"
                        onClick={() => this.deleteFunction(val.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {
              <Modal
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
              >
                {this.state.details.map(val => {
                  return (
                    this.state.currentid === val.id && (
                      <>
                        <div className="modal_align">
                          <p>id : {val.id}</p>
                          <p>Name :{val.Name_api}</p>
                          <p> phone No : {val.Phone_api}</p>
                          <p>
                            {" "}
                            Transaction Balance :{this.state.Transactionbalance}
                          </p>
                          <p>Father's Name : {val.Father_api}</p>
                          <p> Mother's Name :{val.Mother_api}</p>
                          <p> D. O. B : {val.Dob_api}</p>
                          <p> Address : {val.Address_api}</p>
                          <p> Qualification : {val.Qualification_api}</p>
                          <p> Material Status : {val.Material_api}</p>
                          <p> Pan No : {val.Pan_api}</p>
                          <p> Aadhar No : {val.Aadhar_api}</p>
                          <p> Religion : {val.Religion_api}</p>
                          <p> Nationality : {val.Nation_api}</p>
                        </div>
                        <div className="btn_center">
                          <button
                            type="submit"
                            className=" btn btn-sm btn-primary"
                          >
                            Edit
                          </button>
                        </div>
                      </>
                    )
                  );
                })}
              </Modal>
            }
          </div>
        )}
      </>
    );
  }
}
export default Dashboard;
