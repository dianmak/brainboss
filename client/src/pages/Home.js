import React, { Component, Button, Image } from "react";
import API from "../utils/API";
import Container from "@material-ui/core/Container";
import { Grid, Typography } from "@material-ui/core";
import "./styling/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <div className="parallax">
              <div className="title">
                <span className="titleLarge"> BRAIN BOSS </span>
                <span className="titleSmall"> life coaching </span>
              </div>
              <div className="message">
                <p> Do you have a human brain?</p>
                <p>You might want to figure out how to use it.</p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Typography>Text 1</Typography>
        </Grid>
      </div>
    );
  }
}

export default Home;
