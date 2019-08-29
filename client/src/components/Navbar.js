import React from "react";
import { Link } from "react-router-dom";
import { Grid, AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../pages/styling/Navbar.css";

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

          <div className="login">
            <Button href="/loginpage">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
