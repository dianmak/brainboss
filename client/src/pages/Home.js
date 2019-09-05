import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import "./styling/Home.css";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import logo from "../assets/images/brainboss.png";

class Home extends Component {
  logout() {
    console.log("log out");
  }

  render() {
    return (
      <div>
        <Nav />
        <Grid container spacing={0} id="containerparallax">
          <Grid item md={12}>
            <div className="parallax">
              <img src={logo} id="logo"></img>
              <div className="title">
                <span className="titleSmall"> life coaching </span>
              </div>
              <div className="message">
                <p> Do you have a human brain?</p>
                <p>You might want to figure out how to use it.</p>
              </div>
            </div>
          </Grid>
          <strong fullwidth id="name" align="center">
            DIAN MAK B.S. | CERTIFIED LIFE COACH
          </strong>
        </Grid>
        <Container align="center" id="textcontainer">
          <div id="message1">
            <br></br>
            <p>
              You have dreams and goals - things you want to accomplish in life
              - but as time goes by...
              <strong>
                all you've done is mastered the art of sitting on your as*.
              </strong>
            </p>
            <p>
              You want reality to be different - whether that’s yourself, people
              in your life or the world - and use this as a reason to be
              unhappy.
            </p>
            <p>
              You believe you are intelligent... yet often feel as if you don't
              know your own mind and it's working against you.
            </p>
            <hr></hr>
            <span>THREE WORDS:</span>
            <p id="fts">F*ck. That. Sh*t.</p>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
