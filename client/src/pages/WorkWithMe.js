import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Container } from "@material-ui/core";

function WorkWithMe() {
  return (
    <Grid container spacing={3} justify="center">
      <Grid item>
        <Button variant="outlined" color="secondary" href="/myinfo">
          Apply for Consultation Call
        </Button>
      </Grid>
      <h1>Hello from WorkWithMe</h1>
    </Grid>
  );
}

export default WorkWithMe;
