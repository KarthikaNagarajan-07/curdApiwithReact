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
      url: "https://66165a14b8b8e32ffc7d34b0.mockapi.io/user",
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
            <label>Name : </label>
            <input name="name" ></input>
          </Grid>

          <Grid item md={3}>
            <label>Father's Name : </label>
            <input name="father" ></input>
          </Grid>

          <Grid item md={3}>
            <label>Mother's Name : </label>
            <input name="mother" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Phone No :</label>
            <input name="phoneno" ></input>
          </Grid>

          <Grid item md={3}>
            <label>D. O. B :</label>
            <input name="dob " ></input>
          </Grid>

          <Grid item md={3}>
            <label> Address :</label>
            <input name="add" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Qualification :</label>
             <input name="qualify" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Material Status :</label>
            <input name="material" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Pan No :</label>
            <input name="panno" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Aadhar No :</label>
            <input name="aadhar" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Religion :</label>
            <input name="religion" ></input>
          </Grid>

          <Grid item md={3}>
            <label> Nationality :</label>
            <input name="nation" ></input>
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
