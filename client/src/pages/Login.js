import React, { Component } from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import API from "../utils/API";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./styling/Login.css";

class Login extends Component {
  state = { username: "", password: "" };

  handleClick = e => {
    e.preventDefault();
    API.login(this.state.username, this.state.password)
      .then(data => {
        console.log("in Login.js handleClick " + data);
        if (data.status === 200) {
          this.props.history.push("/mysessions");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name + value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Nav />

        <Grid
          container
          alignItems="center"
          justify="center"
          alignContent="center"
          direction="column"
          id="containerlogin"
        >
          <h1>If you are an existing client, please log in below.</h1>
          <br></br>
          <TextField
            name="username"
            onChange={this.handleChange}
            display="block"
            label="Email"
          />
          <br></br>
          <TextField
            name="password"
            onChange={this.handleChange}
            display="block"
            label="Password"
          />
          <br></br>
          <Button color="inherit" onClick={this.handleClick}>
            Log In
          </Button>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Login;
