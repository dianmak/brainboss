import React from "react";
import { Button, Grid, Container } from "@material-ui/core";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import photo from "../assets/images/workwithme.jpg";
import "./styling/WorkWithMe.css";

function WorkWithMe() {
  return (
    <div>
      <Nav />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img src={photo} id="photo"></img>
        </Grid>
        <Grid item xs={6} id="textbox" align="center">
          <h1>JOIN THE REVOLUTION</h1>
          <p>
            Ready to learn how to use the most powerful machine in your
            possession?
          </p>
          <p> Click below, submit your information and let's talk!</p>
          <Button variant="outlined" color="primary" href="/myinfo">
            Apply for a Consultation Call Now
          </Button>
          <br></br>
          <p>Still not sure what this is all about?</p>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default WorkWithMe;
