import React from "react";
import "./Form.css";
import { Grid } from "@material-ui/core";
const axios = require("axios");

class Form extends React.Component {
  state = {
    Name: "",
    Pan: "",
    Phone: "",
    Aadhar: "",
    Father: "",
    Mother: "",
    Nation: "",
    Address: "",
    Material: "",
    Qualification: "",
    Dob: "",
    Religion: ""
  };

  submit = e => {
    e.preventDefault();

    var Name_api = e.target.name.value;
    var Pan_api = e.target.panno.value;
    var Phone_api = e.target.phoneno.value;
    var Aadhar_api = e.target.aadhar.value;
    var Father_api = e.target.father.value;
    var Mother_api = e.target.mother.value;
    var Nation_api = e.target.nation.value;
    var Address_api = e.target.add.value;
    var Material_api = e.target.material.value;
    var Qualification_api = e.target.qualify.value;
    var Dob_api = "6666";
    var Religion_api = e.target.religion.value;

    axios({
      method: "post",
      url: "https://5df341cf9b71960014bf6a77.mockapi.io/bankapi",
      headers: { "content-type": "application/json" },
      data: {
        Name_api,
        Pan_api,
        Phone_api,
        Aadhar_api,
        Father_api,
        Mother_api,
        Address_api,
        Material_api,
        Qualification_api,
        Dob_api,
        Religion_api
      }
    });

    this.setState({
      Name: Name_api,
      Pan: Pan_api,
      Phone: Phone_api,
      Aadhar: Aadhar_api,
      Father: Father_api,
      Mother: Mother_api,
      Nation: Nation_api,
      Address: Address_api,
      Material: Material_api,
      Qualification: Qualification_api,
      Dob: Dob_api,
      Religion: Religion_api
    });

    setTimeout(() => {
      this.props.history.push("/dashboard");
    }, 1000);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <Grid container spacing={3} className="mt-3">
          <Grid item md={3}>
            Name : <input name="name" className="ml-4"></input>
          </Grid>

          <Grid item md={3}>
            Father's Name : <input name="father" className="ml-4"></input>
          </Grid>

          <Grid item md={3}>
            Mother's Name : <input name="mother" className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Phone No :</label> */}
            Phone No : <input name="phoneno" className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label>D. O. B :</label> */}
            D. O. B :<input name="dob " className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Address :</label> */}
            Address : <input name="add" className="ml-5"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Qualification :</label> */}
            Qualification : <input name="qualify" className="ml-4"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Material Status :</label> */}
            Material Status : <input name="material" className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Pan No :</label> */}
            Pan No : <input name="panno" className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Aadhar No :</label> */}
            Aadhar No : <input name="aadhar" className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Religion :</label> */}
            Religion : <input name="religion" className="ml-3"></input>
          </Grid>

          <Grid item md={3}>
            {/* <label> Nationality :</label> */}
            Nationality : <input name="nation" className="ml-3"></input>
          </Grid>
        </Grid>
        <div>
          <button type="submit" className="mt-3 btn_align">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
