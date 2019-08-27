import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import API from "../utils/API";

class Login extends Component {
  state = { username: "", password: "" };

  handleClick = e => {
    e.preventDefault();
    API.login(this.state.username, this.state.password);
  }

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
        <h1>If you are an existing client, please log in below.</h1>
        <Grid
          container
          alignItems="center"
          justify="center"
          alignContent="center"
          direction="column"
        >
          <TextField name="username" onChange={this.handleChange} display="block" label="Email" />
          <TextField name="password" onChange={this.handleChange} display="block" label="Password" />

          <Button color="inherit" onClick={this.handleClick}>
            Log In
          </Button>

          {/* <form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <input type="submit" value="Log In"/>
    </div>
</form> */}
        </Grid>
        
      </div>
    );
  }
}

export default Login;
