import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Link
} from "@material-ui/core";
import Nav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function About() {
  return (
    <div>
      <Nav />
      <Footer />
    </div>
  );
}

export default About;
