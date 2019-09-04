import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Container } from "@material-ui/core";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function WorkWithMe() {
  return (
    <div>
      <Nav />
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Button variant="outlined" color="secondary" href="/myinfo">
            Apply for Consultation Call
          </Button>
        </Grid>
        <h1>Hello from WorkWithMe</h1>
      </Grid>
      <Footer />
    </div>
  );
}

export default WorkWithMe;
