import React, { Component } from "react";
import { Link } from "react-router-dom";
import "date-fns";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

class MyInfo extends Component {
  state = {
    selectedDate: new Date("2019-08-15T21:11:54")
  };

  handleDateChange = date => {
    console.log("New date: " + date);
    this.setState({ selectedDate: date });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("In handleformsubmit in MyInfo.js");
    this.props
      .handleFormSubmit(this.state.selectedDate)
      .then(() => this.props.history.push("/survey"));
  };

  render() {
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        alignContent="center"
        direction="column"
      >
        <Typography variant="h6" display="block">
          Enter your information to begin your application.
        </Typography>
        <TextField
          name="fullname"
          display="block"
          label="Full Name"
          onChange={e => this.props.onChange(e)}
        />
        <TextField
          name="email"
          display="block"
          label="Email Address"
          onChange={e => this.props.onChange(e)}
        />

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date of Birth"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <Button color="inherit" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </Grid>
    );
  }
}

export default MyInfo;
