import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function WorkWithMe() {
  return (
    <div>
      <Button variant="outlined" color="secondary" href="/myinfo">Apply for Consultation Call</Button>
      <h1>Hello from WorkWithMe</h1>
    </div>
  );
}

export default WorkWithMe;
