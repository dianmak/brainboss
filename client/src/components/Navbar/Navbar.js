import React from "react";
import { Link } from "react-router-dom";
import { Grid, AppBar, Toolbar, Button } from "@material-ui/core";
import "./Navbar.css";

function Navbar() {
  return (
    <Grid container spacing={2}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Link to="/" className="navitemleft">
            HOME
          </Link>

          <Link to="/workwithme" className="navitem">
            WORK WITH ME
          </Link>

          <Link to="/about" className="navitem">
            ABOUT & CONTACT
          </Link>

          <Link to="/loginpage">
            <button id="login">LOG IN</button>
          </Link>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
