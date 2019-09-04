import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import "./styling/Home.css";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

class Home extends Component {
  logout() {
    console.log("log out");
  }

  render() {
    return (
      <div>
        <Nav />
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
        <Container align="center" id="textcontainer">
          <p> We are going to discover how we think.</p>
          <p> Text 2 </p>
          <p> Text 2 </p>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
